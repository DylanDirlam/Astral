const Discord = require('discord.js')
const Dotenv = require('dotenv')
const Moment = require('moment')
process.on('unhandledRejection', (reason, p) => {
  console.log(`${Moment().format(process.env.TIMESTAMP_FORMAT)}: Unhandled Rejection at: Promise`, p, 'reason:', reason)
})
Dotenv.config()
const Client = new Discord.Client()

// Command Files

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
  }
})

Client.login(process.env.BOT_TOKEN)