const { stdin } = require('process');
const { moves } = require('./constants');

const setupInput = function(conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput(conn);
  return stdin;
};

const handleUserInput = function(conn) {
  stdin.on('data', (key) => {
    if (moves[key] !== undefined) {
      conn.write(moves[key]);
    } else if (key === "\u0003") {
      process.exit();
    }
  });
};

module.exports = {
  setupInput
};