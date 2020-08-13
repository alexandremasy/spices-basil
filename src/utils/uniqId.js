const idCounter = {}

/**
 * Generate a unique ID. If `prefix` is given, the ID is append to it.
 * 
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string}
 * @source lodash.com
 */
export default (prefix = '') => {
  let key = prefix.length > 0 ? prefix : '$basil$';
  if (!idCounter.hasOwnProperty(key)){
    idCounter[key] = 0
  }

  const id = ++idCounter[key];

  return `${prefix}${id}`
}
