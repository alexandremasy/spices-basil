import copy from "./copy";

/**
 * Shuffle the given value with the Fisher Yates shuffle
 * 
 * @param {Array} value The value to shuffle
 */
export default (value) => {
  let ret = copy(value);

  var m = ret.length, t, i;
  while (m) {
    i = ~~(Math.random() * m--);
    t = ret[m];
    ret[m] = ret[i];
    ret[i] = t;
  }

  return ret;
}
