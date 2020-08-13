#!/usr/bin/env node
const path = require('path');
const __cwd = path.resolve('.');
const { name, version } = require(path.join(__cwd, 'package.json'));
const semver = require('semver');
const https = require('https');
const ora = require('ora');
const execute = require('../utils/execute')
const verbose = false;

let tagVersion = '0.0.0';
let next = '0.0.0';
const spinner = ora(`Versionning ${name}`).start();

function run(){
  return getLatestVersionTag()
    .then(getRelease)
    .then(getNextVersion)
    .then(publishOnNPM)
    .then(publishVersion)
    .then(publishToDiscord)
    .then(() => {
      spinner.succeed(`${name}: ${version} => ${next}`);
    })
    .catch(e => { 
      console.log(e) 
      process.exit(0);
    });
}

function publishOnNPM(v) {
  return new Promise((resolve, reject) => {
    let command = `yarn publish --new-version ${v} --quiet`;
    execute(command)
      .then(resolve)
      .catch(reject)
  })
}

function publishToDiscord() {
  return new Promise((resolve, reject) => {
    console.log('discord', next);
    let params = {
      content: `**${name}** \`${next}\` published`,
      username: 'Jenkins',
      avatar_url: 'http://cdn.sayl.cloud/libs/ci/jenkins.png'
    }

    const data = JSON.stringify(params);
    const options = {
      hostname: 'discordapp.com',
      port: 443,
      path: '/api/webhooks/742318702997012550/PKufWxrY_X9Oc1XzREac__JJFUuNXpV9_1Z3Y0WwYtl-4WXAHJD8q9Q2RjowAC1Jc3h7',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    }

    const req = https.request(options, (res) => {
      console.log('status', res.statusCode);

      res.on('data', (d) => {
        process.stdout.write(d)
      });

      resolve();
    })

    req.on('error', (error) => {
      reject(error);
    })

    req.write(data)
    req.end();
  })
}

function getLatestVersionTag() {
  return new Promise((resolve, reject) => {
    let command = 'git describe --abbrev=0 --tags';
    execute(command, {verbose})
      .then((v) => {
        tagVersion = semver.clean(v);
        resolve();
      })
      .catch(e => {
        resolve();
      })
  })
}

/**
 * Get the next version number based on the release type
 * 
 * @param {String} release The release type
 */
function getNextVersion(release){
  next = semver.gt(tagVersion, version) ? tagVersion : version;
  next = semver.inc(next,release);
  
  return Promise.resolve( next );
}

/**
 * Find out the release type based on the git history
 * 
 * @returns {Promise.<String>} - The release `major` - `minor` - `patch` - `null`
 */
function getRelease(){
  return new Promise((resolve, reject) => {
    let command = 'git log --oneline $(git describe --tags --abbrev=0 @^)..@';
    execute(command, {verbose})
    .then((response) => {
      let release = parseCommits(response);
      release === null ? reject('no changes to publish') : resolve(release);
    })
    .catch(e => {
      command = 'git log --oneline';
      execute(command, {verbose})
      .then((response) => {
        let release = parseCommits(response);
        release === null ? reject('no changes to publish') : resolve(release);
      })
    })
  })
}

function parseCommits(commits){
  commits = commits.split('\n')
    .filter(c => c.trim().length > 0)
    .map(c => {
      let s = c.substr(8);
      return {
        sha: c.substr(0, 7),
        subject: s,
        isSemver: semver.valid(s) !== null
      }
    });

  let isPublished = commits.length == 1 && commits[0].isSemver === true;
  let isMajor = commits.find(c => c.subject.includes('bump-major')) !== undefined && !isPublished;
  let isMinor = commits.find(c => c.subject.includes('bump-minor')) !== undefined && !isMajor && !isPublished;
  let isPatch = commits.length > 0 && !isMajor && !isMinor && !isPublished;

  let release = null;
  if (isMajor) release = 'major';
  if (isMinor) release = 'minor';
  if (isPatch) release = 'patch';

  return release;
}


function publishVersion(){
  return new Promise((resolve, reject) => {
    let command = 'git push origin master --tags --quiet'
    execute(command, {verbose})
    .then(resolve)
    .catch(reject)
  })
}

module.exports = run;
