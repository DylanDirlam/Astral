/**
 * Checks if the {msg} contains the {command} value. If it matches the command listed, it runs the command.
 *
 * @param  {string | array}   command
 * @param  {Object}           msg
 * @param  {function}         callback
 */
module.exports = function (command, msg, callback) {
  if (typeof command === 'string') {
    if (msg.content.toLowerCase().startsWith(command, 1)) {
      callback.call(false, msg)
      return true
    }
  }

  if (Array.isArray(command)) {
    for (let i = 0; i < command.length; i++) {
      const element = command[i]
      if (msg.content.toLowerCase().startsWith(element, 1)) {
        callback.call(false, msg)
        return true
      }
    }
  }
}
