import core from './core'

export default install = (Vue, options = {}) => {
  Object.defineProperty(Vue.prototype, '$basil', {
    get: () => core
  })
}
