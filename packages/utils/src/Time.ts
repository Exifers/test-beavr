
export namespace Time {
  export function today() {
    const now = new Date()
    now.setUTCHours(0, 0, 0, 0)
    return now
  }
}