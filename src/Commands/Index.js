// Connects the methods to each respective file. Order them by category alhpabetically and then commands alphabetically.

module.exports = {
  Moderation: {
    Ban: require('./Moderation/Ban.js'),
    Kick: require('./Moderation/Kick.js')
  },
  Utility: {
    Help: require('./Utility/Help.js'),
    Ping: require('./Utility/Ping.js'),
    User: require('./Utility/User.js')
  }
}
