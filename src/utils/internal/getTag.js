/**
 * Get the `toStringTag` of `value`
 * 
 * @param {*} value The value to query
 * @returns {string} Return the `toStringTag`
 * @private
 */
export default (value) => 
  value == null ?
  value === undefined ? '[object Undefined]' : '[object Null]' :
  Object.prototype.toString.call(value);
  