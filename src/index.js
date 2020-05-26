const Discord = require('discord.js')
const Dotenv = require('dotenv')
const Moment = require('moment')
process.on('unhandledRejection', (reason, p) => {
  console.log(`${Moment().format(process.env.TIMESTAMP_FORMAT)}: Unhandled Rejection at: Promise`, p, 'reason:', reason)
})
Dotenv.config()
const Client = new Discord.Client()

// Command Files
const Utility = require('./Commands/Utility.js')
const Moderation = require('./Commands/Moderation.js')

// Startup Code once bot is loaded
Client.on('ready', () => {
  Client.user.setActivity('💻 Dev Mode')
  console.log('Bot loaded.')
})

// Message events
Client.on('message', async (msg) => {
  if (msg.author.bot) return
  if (msg.content.startsWith(';')) {
    if (msg.content.startsWith('ping', 1)) {
      msg.channel.send('p o n g')
    }
    if (msg.content.toLowerCase().startsWith('user', 1)) {
      Utility.User(msg)
      return
    }
    if (msg.content.toLowerCase().startsWith('kick', 1)) {
      Moderation.Kick(msg)
      return
    }
    if (msg.content.toLowerCase().startsWith('ban', 1)) {
      Moderation.Ban(msg)
      return
    }
    console.log('No command found')
  }
})

Client.login(process.env.BOT_TOKEN)
