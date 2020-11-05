const { stdin } = require('process');
const { moves } = require('./constants');
let conn;

const setupInput = function(connection) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  conn = connection;
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
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