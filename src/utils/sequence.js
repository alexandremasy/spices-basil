import isArray from './isArray'

let count = 0;
let results = [];
const iterator = (previous, current) => {
  return previous.then(result => {
    if (count++ !== 0){
      results.push(result);
    }
    return current.call(current)
  })
}

export default (fns = []) => {
  if (!isArray(fns)){
    return Promise.reject('fns is not an array')
  }

  return fns.concat(() => Promise.resolve())
  .reduce(iterator, Promise.resolve(false))
  .then(() => results);
}
