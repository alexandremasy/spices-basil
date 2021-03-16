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

/**
 * Run an array of tasks in sequence, without overlap. 
 * Each task will be called with the arguments passed to when.
 * sequence(), and each may return a promise or a value.
 * When all tasks have completed, the returned promise will resolve to an array containing 
 * the result of each task at the corresponding array position. The returned promise will 
 * reject when any task throws or returns a rejection.
 * 
 * @param {Array<Function>} tasks
 * @param {Number} size = 1
 * @returns {Promise}
 */
export default async (tasks, size = 1) => {
  if (!isArray(tasks)){
    return Promise.reject('tasks is not an array')
  }

  let position = 0
  let results = []
  while (position < tasks.length){
    const batch = tasks.slice(position, position + size)
    results = [...results, ...await Promise.all(batch.map(i => i()))]
    position += size
  }

  return results
}