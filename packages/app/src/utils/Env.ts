
export namespace Env {
  type Env = 'local' | 'production'

  export function get(): Env {
    if (window.location.href.match(/^http:\/\/localhost/))
      return 'local'
    return 'production'
  }
}