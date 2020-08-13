import core from './core'

export default (Vue, options = {}) => {
  Object.defineProperty(Vue.prototype, '$basil', {
    get: () => core
  })
}
