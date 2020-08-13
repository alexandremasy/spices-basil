import sayl from './core'

// @ts-ignore
window.sayl = sayl;

export default function install(Vue, options = {}){
  Object.defineProperty(Vue.prototype, '$sayl', {
    get(){ return sayl }
  })
}
