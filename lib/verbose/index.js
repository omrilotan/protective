import { stringify } from '../stringify/index.js'

/**
 * Add a list of arguments to the error message
 * @param {Error} error
 * @param {Any[]} args
 * @returns {Error}
 */
function enrichMessage (error, args) {
  const list = Array.from(args).map(stringify).join(', ')
  error.message = `${error.message}. Arguments: ${list}`
  return error
}

/**
 * Wrap a filter function to add arguments to error messages
 * @param {Function} fn
 * @returns {Function}
 */
export function verbose (fn) {
  return function () {
    try {
      const result = fn.apply(this, arguments)
      if (result instanceof Promise) {
        // Register then/catch listeners to the promise
        // (*) Registering "finally" triggers unhandledRejection even for caught errors
        // If the caller does not set catch clause, unhandledRejection will still be triggered.
        result.catch(error => enrichMessage(error, arguments))
      }
      return result
    } catch (error) {
      throw enrichMessage(error, arguments)
    }
  }
}
