import utils from './utils'
import isFunction from './utils/isFunction'
import vue from './core/vue'

const core = Object.assign({}, utils);

/**
 * Whether or not declare the globally basil
 */
let _isGlobal = false;
Object.defineProperty(core, 'global', {
  get: () => _isGlobal,
  set: (value) => {
    _isGlobal = value;
    if (value === true){
      window.basil = core;
    } 
  }
});

/**
 * @property {array} plugins
 * @private
 */
const __plugins = [];

/**
 * Install a plugin
 * 
 * @param {*} plugin 
 */
core.use = (plugin, options) => {
  if (!isFunction(plugin.install)) {
    console.log('A basil plugin must have an install method', plugin);
    return;
  }

  plugin.install.call(plugin, core, options);
  __plugins.push({plugin, options});
}

/**
 * Relaunch the plugin install
 * 
 * @private
 */
core.reset = () => {
  __plugins.forEach( (p) => p.plugin.install.call(p.plugin, core, p.options) )
}

// VueJS Plugin
core.use(vue);

export default core
