/**
 * テストセットの選定。
 *
 * 学習に使わない問題を、シードから機械的に決める。恣意的に選ぶと
 * 「解けそうな問題だけ残す」ことができてしまい、評価が信用できなく
 * なるため（nanikiru-ai-design-doc.md §7.1）。
 */

/** 文字列シードを32bit整数に潰す（FNV-1a）。 */
function hashSeed(seed: string): number {
  let hash = 0x81_1c_9d_c5;
  for (let i = 0; i < seed.length; i += 1) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 0x01_00_01_93);
  }
  return hash >>> 0;
}

/** mulberry32。乱数の質より再現性が要る用途なのでこれで足りる。 */
function createRandom(seed: number): () => number {
  let state = seed;
  return () => {
    state = (state + 0x6d_2b_79_f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4_294_967_296;
  };
}

/**
 * テスト用に確保する問題IDを選ぶ。
 *
 * 同じ引数なら常に同じ結果を返す。呼び出し側が渡す順番に影響されない
 * よう、先にIDを昇順に整えてから抽選する。
 */
export function selectTestIds(
  ids: readonly string[],
  count: number,
  seed: string,
): readonly string[] {
  if (count > ids.length) {
    throw new Error(
      `テストに確保する件数（${count}）が問題数（${ids.length}）を超えています`,
    );
  }
  const pool = [...ids].sort();
  const random = createRandom(hashSeed(seed));
  // Fisher-Yates を前から count 回だけ回す
  for (let i = 0; i < count; i += 1) {
    const j = i + Math.floor(random() * (pool.length - i));
    const a = pool[i]!;
    const b = pool[j]!;
    pool[i] = b;
    pool[j] = a;
  }
  return pool.slice(0, count).sort();
}
