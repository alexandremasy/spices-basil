import getTag from './internal/getTag'

/**
 * Check if `value` is classified as a `RegExp` object.
 *
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a RegExp, else `false`
 * @source lodash.com
 */
export default (value) => {
  return value && getTag(value) === '[object RegExp]'
}
