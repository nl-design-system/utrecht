/* NOTE: this file is necessary until we upgrade to a TS (v5+) / node (18) version that has a definition for 'findLastIndex' */
export {};

declare global {
  interface Array<T> {
    findLastIndex(predicate: (value: T, index: number, obj: T[]) => unknown, thisArg?: any): number;
  }
}
