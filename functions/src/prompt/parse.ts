/**
 * モデル出力のパース。
 *
 * 出力フォーマットは buildSystemInstruction() が指示したもの
 * （nanikiru-ai-design-doc.md §6.6）。
 *
 * シャンテン数・受入枚数はモデルの申告値であり、API層でソルバーの値に
 * 上書きする（§8.5）。ここでは読み取るだけで検証しない。
 *
 * 出力は推奨打牌と理由のみで、「避けるべき打牌」は扱わない（§3.4）。
 * 未知の見出しは無視するため、モデルが余分な節を書いても壊れない。
 */

import {InvalidTileError, parseTile, type Tile} from '../solver/tile.js';

export type ModelResponse = {
  readonly discard: Tile;
  /** モデルが申告したシャンテン数。書かれていなければ undefined */
  readonly shanten: number | undefined;
  /** モデルが申告した受入枚数。書かれていなければ undefined */
  readonly ukeireTotal: number | undefined;
  readonly reason: string;
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
