
export namespace Type {
  export function isArray(o: unknown): o is unknown[] {
    return Array.isArray(o);
  }

  export function isObject(o: unknown): o is object {
    return typeof o === 'object' && o !== null && !isArray(o)
  }
}