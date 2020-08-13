import core from './core'

export default (Vue, options = {}) => {
  core.$vue = Vue;

  Object.defineProperty(Vue.prototype, '$basil', {
    get: () => core
  })
}
