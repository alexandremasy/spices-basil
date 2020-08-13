/**
 * Generate a uuid
 * 
 * @see https://en.wikipedia.org/wiki/Universally_unique_identifier
 * @returns {string} Returns the unique uuid
 */
export default function uuid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0
    let v = c == 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16);
  });
}
