
export namespace Time {
  export function today() {
    const now = new Date()
    now.setUTCHours(0, 0, 0, 0)
    return now
  }

  export function getCurrentYearStart() {
    const date = new Date()
    date.setUTCMonth(0, 1)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }

  export function getCurrentYearEnd() {
    const date = new Date()
    date.setUTCMonth(11, 31)
    date.setUTCHours(0, 0, 0, 0)
    return date
  }
}