const pino = require("pino");

const logger = pino.default(
  {
    prettyPrint: true,
  },
  pino.destination({
    fd: process.stdout.fd,
    minLength: 65536,
    sync: false,
  })
);

console.log("Trying to log 'Hello!'");
logger.info("Hello!");
logger.flush();

setTimeout(function () {
  exit(0);
}, 5000);
