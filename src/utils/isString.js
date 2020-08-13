import isArray from './isArray'
import getTag from './internal/getTag'

/**
 * Check if `value` is classified as a `String` primitive or object.
 * 
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is a string, else `false`
 */
export default (value) => {
  const type = typeof value;
  return type === 'string' || (type === 'object' && value != null && !isArray(value) && getTag(value) == '[object String]');
}
