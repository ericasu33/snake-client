const { connect } = require('http2');
const { stdin } = require('process');
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
    if (key === '\u0003') {
      process.exit();
    }
    
    if (key === 'w') {
      conn.write("Move: up");
    } else if (key === 'a') {
      conn.write("Move: left");
    } else if (key === 'd') {
      conn.write("Move: right");
    } else if (key === 's') {
      conn.write("Move: down");
    }

    if (key === 'z') {
      conn.write("Say: Hellooo");
    }
    
  });
};

module.exports = {
  setupInput
};