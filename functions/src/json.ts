/**
 * JSONの読み取りヘルパー。
 *
 * 外部から来る値（APIのリクエスト、問題マスタのファイル）の型を確認する。
 * 呼び出し側で JsonFieldError を捕まえ、文脈に応じた例外に包み直す。
 */

export class JsonFieldError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'JsonFieldError';
  }
}

export function requireObject(
  value: unknown,
  field: string,
): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new JsonFieldError(`${field} はオブジェクトである必要があります`);
  }
  return value as Record<string, unknown>;
}

export function requireString(value: unknown, field: string): string {
  if (typeof value !== 'string') {
    throw new JsonFieldError(`${field} は文字列である必要があります`);
  }
  return value;
}

export function optionalString(
  value: unknown,
  field: string,
): string | undefined {
  if (value === undefined || value === null) {
    return undefined;
  }
  return requireString(value, field);
}

export function requireNumber(value: unknown, field: string): number {
  if (typeof value !== 'number') {
    throw new JsonFieldError(`${field} は数値である必要があります`);
  }
  return value;
}

export function requireBoolean(value: unknown, field: string): boolean {
  if (typeof value !== 'boolean') {
    throw new JsonFieldError(`${field} は真偽値である必要があります`);
  }
  return value;
}

export function requireArray(value: unknown, field: string): unknown[] {
  if (!Array.isArray(value)) {
    throw new JsonFieldError(`${field} は配列である必要があります`);
  }
  return value;
}

export function requireStringArray(value: unknown, field: string): string[] {
  return requireArray(value, field).map((item, index) =>
    requireString(item, `${field}[${index}]`),
  );
}

export function requireEnum<T extends string>(
  value: unknown,
  allowed: readonly T[],
  field: string,
): T {
  const text = requireString(value, field);
  if (!allowed.includes(text as T)) {
    throw new JsonFieldError(
      `${field} は ${allowed.join(' / ')} のいずれかです（"${text}"）`,
    );
  }
  return text as T;
}
