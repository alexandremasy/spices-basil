/**
 * Returns a promise that will be resolved after `wait` milliseconds
 * 
 * @param {number} wait The number of milliseconds to delay the invocation
 * @returns {Promise}
 */
export default (wait) => new Promise(resolve => setTimeout(() => resolve(), wait))
