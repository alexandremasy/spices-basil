import isArray from "./isArray"
import isObject from "./isObject"

/**
 * Create a copy of the given object
 * 
 * @param {Array|Object} value The value to copy
 * @returns {Array|Object} The duplicated entry
 */
export default (value) => {
  let ret = null;

  // Array
  if (isArray(value)){
    ret = [...value];
  }

  // Object
  if (isObject(value)){
    ret = JSON.parse(JSON.stringify(value))
  }

  return ret;
}
