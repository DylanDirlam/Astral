/*
 * Counts the number of commands listed in /src/Commands/Commands.js and returns it
 */
const Commands = require('./../../Commands/Commands.js')
module.exports = function () {
  let count = 0
  // eslint-disable-next-line no-unused-vars
  for (const [a, cmds] of Object.entries(Commands)) {
    count++
  }
  return count
}
