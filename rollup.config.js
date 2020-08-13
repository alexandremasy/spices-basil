const path = require('path')
const cjs = require('@rollup/plugin-commonjs')
const { terser } = require('rollup-plugin-terser')

const version = process.env.VERSION || require('./package.json').version
const banner =
  `/*!
  * @spices/basil v${version}
  * (c) ${new Date().getFullYear()} Alexandre Masy
  * @license MIT
  */`

const resolve = _path => path.resolve(__dirname, _path)

module.exports = [
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-basil.js'),
    format: 'umd',
    env: 'development'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-basil.min.js'),
    format: 'umd',
    env: 'production'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-basil.esm.js'),
    format: 'es',
    env: 'development'
  },
  {
    entry: resolve('src/index.js'),
    file: resolve('dist/spices-basil.esm.min.js'),
    format: 'es',
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
      name: 'Spicesbasil'
    },
    plugins: [
      cjs(),
      terser({
        output: {
          comments: opts.env === 'development' ? 'all' : function (node, comment) {
            var text = comment.value;
            var type = comment.type;
            if (type == "comment2") {
              // multiline comment
              return /@preserve|@license|@cc_on/i.test(text);
            }
          },
        },
      })
    ]
  }

  return ret;
}
