var chalk = require("chalk");

var message = chalk.yellow.bgRed("Hello ") + chalk.bgYellow.red.bold.underline("World");
console.log(message);