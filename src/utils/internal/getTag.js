/**
 * Get the `toStringTag` of `value`
 * 
 * @param {*} value The value to query
 * @returns {string} Return the `toStringTag`
 * @private
 */
export default function getTag(value){
  if (value == null){
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }

  return Object.prototype.toString.call(value)
}
