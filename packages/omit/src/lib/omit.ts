export function Omit<T extends object, K extends [...(keyof T)[]]>(
  obj: T,
  keys: K,
): {
  [K2 in Exclude<keyof T, K[number]>]: T[K2];
} {
  const ret = {} as {
    [K in keyof typeof obj]: typeof obj[K];
  };

  let key: keyof typeof obj;

  for (key in obj) if (!keys.includes(key)) ret[key] = obj[key];

  return ret;
}

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
