import { Type } from "./Type.ts";

export namespace Iter {
  /**
   * @description Equivalent to Object.keys but returns a typed result using keyof instead of string.
   */
  export function keys<O extends object>(o: O) {
    return Object.keys(o) as unknown as (keyof O)[];
  }

  export function walk(
    o: unknown,
    f: <P extends object, K extends keyof P>(parent: P, key: K, value: P[K]) => void
  ) {
    if (Type.isArray(o)) {
      for (const item of o)
        walk(item, f)
    }
    if (!Type.isObject(o))
      return
    for (const key of keys(o)) {
      const value = o[key]
      f(o, key, value)
      walk(value, f)
    }
  }
}