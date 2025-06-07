// cli.js
const fs = require('fs');
const path = require('path');
const { bootstrap } = require('commitizen/dist/cli/git-cz');

function handleError(error) {
  console.error(error.message || error.toString());
}

// process.env.CZ_ADAPTER = require.resolve('cz-conventional-changelog/package.json');

process.on('uncaughtException', handleError);
process.on('unhandledRejection', handleError);

process.stdin.on('error', handleError);
process.stdout.on('error', handleError);
process.stderr.on('error', handleError);

try {
  bootstrap({
    cliPath: path.dirname(require.resolve('commitizen/package.json'))
  });
} catch (error) {
  handleError(error);
}