import { Iter } from "./Iter.ts";

export namespace Data {
  /**
   * @description Iterates through an object recursively and converts any
   *   string matching an ISO8601 pattern into a date.
   */
  export function parseDates(o: unknown) {
    Iter.walk(o, (parent, key, value) => {
      if (typeof value === 'string' && value.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/))
        // @ts-expect-error cannot infer assignability to Date
        parent[key] = new Date(value)
    })
  }
}