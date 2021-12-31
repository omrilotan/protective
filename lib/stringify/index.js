/**
 * Return JSON string or plain string representation of input
 * @param {any}
 * @returns {string}
 */
export function stringify (subject, ...rest) {
  try {
    return JSON.stringify(subject, ...rest)
  } catch (error) {
    return `${subject}`
  }
}
