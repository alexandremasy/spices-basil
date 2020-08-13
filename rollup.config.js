const path = require('path')
const cjs = require('rollup-plugin-commonjs')
const node = require('rollup-plugin-node-resolve')

const version = process.env.VERSION || require('./package.json').version
const banner =
  `/*!
  * @spices/ginger v${version}
  * (c) ${new Date().getFullYear()} Alexandre Masy
  * @license All right reserved. see license.md
  */`

const resolve = _path => path.resolve(__dirname, _path)


module.exports = [
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger.js'),
    format: 'umd',
    env: 'development'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-ginger.esm.min.js'),
    format: 'es',
    env: 'production'
  },


  {
    entry: resolve('src/index.module.js'),
    file: resolve('dist/spices-ginger.modules.js'),
    format: 'umd',
    env: 'development'
  },
  {
    entry: resolve('src/index.module.js'),
    file: resolve('dist/spices-ginger.modules.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    entry: resolve('src/index.host.js'),
    file: resolve('dist/spices-ginger.host.js'),
    format: 'umd',
    env: 'development'
  },
  {
    entry: resolve('src/index.host.js'),
    file: resolve('dist/spices-ginger.host.min.js'),
    format: 'umd',
    env: 'production'
  },
].map(config)

function config(opts){
  const ret = {
    input: opts.entry,
    output: {
      banner,
      format: opts.format,
      file: opts.file,
      name: 'SpicesGinger'
    },
    plugins: [
      node(),
      cjs(),
    ]
  }

  return ret;
}