/**
 * Produces a random number between the inclusive `min` and `max` bounds.
 * If `floating` is `true` a floating-point number is returned instead of an integer.
 * 
 * @param {number} min The lower bound
 * @param {number} max The upper bound
 * @returns {number} Returns the random number.   
 */
export default (min=0, max=1, floating=false) => 
  floating ? 
  ~~(Math.random() * (max - min + 1)) + min :
  Math.random() * (max - min) + min;
  