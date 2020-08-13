const idCounter:object = {}

/**
 * Generate a unique ID. If `prefix` is given, the ID is append to it.
 * 
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string}
 */
export default function uniqId(prefix = ''){
  let key = prefix.length > 0 ? prefix : '$sayl$';
  if (!idCounter.hasOwnProperty(key)){
    idCounter[key] = 0
  }

  const id = ++idCounter[key];

  return `${prefix}${id}`
}
