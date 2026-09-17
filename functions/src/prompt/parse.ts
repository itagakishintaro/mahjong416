/**
 * モデル出力のパース。
 *
 * 出力フォーマットは buildSystemInstruction() が指示したもの
 * （nanikiru-ai-design-doc.md §6.6）。
 *
 * シャンテン数・受入枚数はモデルの申告値であり、API層でソルバーの値に
 * 上書きする（§8.5）。ここでは読み取るだけで検証しない。
 */

import {InvalidTileError, parseTile, type Tile} from '../solver/tile.js';

export type AvoidedDiscard = {
  readonly discard: Tile;
  readonly reason: string;
};

export type ModelResponse = {
  readonly discard: Tile;
  /** モデルが申告したシャンテン数。書かれていなければ undefined */
  readonly shanten: number | undefined;
  /** モデルが申告した受入枚数。書かれていなければ undefined */
  readonly ukeireTotal: number | undefined;
  readonly reason: string;
  readonly avoid: readonly AvoidedDiscard[];
};

export class ResponseParseError extends Error {
  constructor(reason: string) {
    super(`モデルの応答を解釈できません: ${reason}`);
    this.name = 'ResponseParseError';
  }
}

type Section = {
  readonly name: string;
  /** 見出しと同じ行に書かれた値 */
  readonly inline: string;
  /** 次の見出しまでの本文 */
  readonly body: string;
};

const HEADING = /^\s*【(.+?)】\s*(.*)$/;

/** モデルの応答を構造化する */
export function parseModelResponse(text: string): ModelResponse {
  const sections = splitSections(text);

  const discardSection = sections.find((s) => s.name === '推奨打牌');
  if (discardSection === undefined) {
    throw new ResponseParseError('【推奨打牌】がありません');
  }

  return {
    discard: toTile(discardSection.inline),
    shanten: parseShanten(sections.find((s) => s.name === 'シャンテン数')),
    ukeireTotal: parseUkeireTotal(sections.find((s) => s.name === '受入')),
    reason: sections.find((s) => s.name === '理由')?.body ?? '',
    avoid: collectAvoided(sections),
  };
}

function splitSections(text: string): Section[] {
  const sections: Section[] = [];
  let current: {name: string; inline: string; body: string[]} | undefined;

  const push = () => {
    if (current !== undefined) {
      sections.push({
        name: current.name,
        inline: current.inline,
        body: current.body.join('\n').trim(),
      });
    }
  };

  for (const line of text.split('\n')) {
    const matched = HEADING.exec(line);
    if (matched !== null) {
      push();
      current = {
        name: (matched[1] ?? '').trim(),
        inline: (matched[2] ?? '').trim(),
        body: [],
      };
      continue;
    }
    current?.body.push(line.trim());
  }
  push();
  return sections;
}

function toTile(notation: string): Tile {
  try {
    return parseTile(notation);
  } catch (error) {
    if (error instanceof InvalidTileError) {
      throw new ResponseParseError(error.message);
    }
    throw error;
  }
}

function parseShanten(section: Section | undefined): number | undefined {
  const matched = /(-?\d+)/.exec(section?.inline ?? '');
  return matched === null ? undefined : Number(matched[1]);
}

function parseUkeireTotal(section: Section | undefined): number | undefined {
  const matched = /(\d+)\s*枚/.exec(section?.inline ?? '');
  return matched === null ? undefined : Number(matched[1]);
}

/**
 * 【避けるべき打牌】と【避けるべき理由】を出現順に対にする。
 * 理由が無い打牌も、打牌だけを持つものとして拾う。
 */
function collectAvoided(sections: readonly Section[]): AvoidedDiscard[] {
  const avoided: AvoidedDiscard[] = [];
  for (const [index, section] of sections.entries()) {
    if (section.name !== '避けるべき打牌') {
      continue;
    }
    const next = sections[index + 1];
    const reason = next?.name === '避けるべき理由' ? next.body : '';
    avoided.push({discard: toTile(section.inline), reason});
  }
  return avoided;
}
