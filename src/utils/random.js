import isDate from './isDate'
import isNil from './isNil'

/**
 * Produces a random number between the inclusive `min` and `max` bounds.
 * If `floating` is `true` a floating-point number is returned instead of an integer.
 * 
 * @param {Number} length The length of the desired String. Only for String.
 * @param {Number|Date} min The lower bound
 * @param {Number|Date} max The upper bound
 * @param {Boolean} floating Wheter to enfore an integer or not
 * @param {Function} [type=Number] The type of random. Allowed value Date, Number, String.
 * @returns {Number} Returns the random number.   
 */
export default ({length = 10, min, max, floating=false, type=Number}) => {
  let ret = null
  let fn = null
  let options = { length, min, max, floating, type }

  switch(type){
    default: 
    case Number:
      fn = getRandomNumber; break;
    case String:
      fn = getRandomString; break;
    case Date: 
      fn = getRandomDate; break;
  }

  return fn.call(fn, options)
}

function getRandomNumber({ min = 0, max = 1, floating = false }){
  return floating ?
    ~~(Math.random() * (max - min + 1)) + min :
    Math.random() * (max - min) + min;
}

function getRandomString({ length = 10 }){
  var arr = new Uint8Array(length / 2)
  crypto.getRandomValues(arr)
  const dec2hex = (dec) => dec.toString(16).padStart(2, "0")
  return Array.from(arr, dec2hex).join('')
}

function getRandomDate({ min, max }){
  if (!isNil(max) && !isDate(max)) {
    console.error(`@spices/basil: The max value must be a date`)
    return;
  }
  
  if (!isNil(min) && !isDate(min)) {
    console.error(`@spices/basil: The min value must be a date`)
    return;
  }
  
  let now = new Date()
  max = max ? max : new Date(new Date().setDate(now.getDate() - 7))
  min = min ? min : now

  let ret = getRandomNumber({min: min.getTime(), max: max.getTime()})
  return new Date(ret)
}