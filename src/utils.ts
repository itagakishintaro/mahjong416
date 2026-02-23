/**
 * 数値を小数点第1位で丸める
 */
export function roundTo1(value: number): number {
  return Math.round(value * 10) / 10;
}

/**
 * 配列から重複を除いた新しい配列を返す
 */
export function distinct<T>(array: T[]): T[] {
  return [...new Set(array)];
}
