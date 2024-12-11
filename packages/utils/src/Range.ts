import { assert } from "./assert.ts";

export namespace Range {
  export function overlap(lhs: [number, number], rhs: [number, number]) {
    assert(lhs[0] <= lhs[1])
    assert(rhs[0] <= rhs[1])
    return lhs[0] <= rhs[1] && rhs[0] <= lhs[1]
  }
}