const process = require('child_process');

function executeCommand(command, options) {
  return new Promise((resolve, reject) => {
    let dst = __dirname
    let cwd = options && options.cwd ? options.cwd : null;
    let verbose = options && options.verbose ? options.verbose === true : false;

    process.exec(command, { cwd }, 
      (err, stdout, stderr) => {

      if (verbose){
        console.log(stdout);
      }

      return stderr ? reject(stderr) : resolve(stdout);
    })
  })
}

module.exports = executeCommand;
