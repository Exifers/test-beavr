import { format } from 'date-fns'

export namespace FormUtils {
  export function formatDate(date: Date | undefined) {
    if (!date) return undefined
    return format(date, 'yyyy-MM-dd')
  }
}