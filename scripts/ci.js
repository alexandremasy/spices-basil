#!/usr/bin/env node
const execute = require('./utils/execute');
const path = require('path');
const __cwd = path.resolve('.');
const verbose = true;

function before(){
  return execute('./scripts/stages/before.sh', { cwd: __cwd, verbose })
}

function version(){
  return require('./stages/version')();
}

const args = process.argv.slice(2);
if (args.length == 0){
  before()
  .then(version)
  .catch(e => {
    console.log(e);
  })
}
else{
  let fn = null;
  switch(args[0]){
    case 'before':
      fn = before; break;
    case 'version':
      fn = version; break;
  }

  fn()
  .then(() => console.log('done'))
  .catch(e => console.log(e))
}
