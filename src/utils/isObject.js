/**
 * Whether or not the value is of type Object
 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 * 
 * @param {*} value The value to check.
 * @return {boolean} Returns `true` if `value` is an object, else `false`
 * @see http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types
 * @source lodash.com
 */
export default (value) => {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function')
}
