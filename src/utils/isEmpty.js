import isArray from './isArray'
import getTag from './internal/getTag'
import isPrototype from './internal/isPrototype'

/**
 * Checks if `value` is an empty object, collection, map, or set.
 * 
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 * 
 * @param {*} value The value to check
 * @returns {boolean} Returns `true` if `value` is empty, else `false` 
 */
export default (value) => {
  if (isArray(value) || typeof value === 'string' || typeof value.splice === 'function'){
    return !value.length
  }

  const tag = getTag(value);
  if (tag == '[object Map]' || tag == '[object Set]'){
    return !value.size
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length
  }

  for (const key in value) {
    if (Object.prototype.hasOwnProperty.call(value, key)) {
      return false
    }
  }

  return true
}
