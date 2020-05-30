const Discord = require('discord.js')
const Dotenv = require('dotenv')
Dotenv.config()
const Moment = require('moment')
process.on('unhandledRejection', (reason, p) => {
  console.log(`${Moment().format(process.env.TIMESTAMP_FORMAT)}: Unhandled Rejection at: Promise`, p, 'reason:', reason)
})
const Client = new Discord.Client()
const Core = require('./Core/Index.js')
const Commands = require('./Commands/Index.js')

// Startup Code once bot is loaded
Client.on('ready', () => {
  switch (process.env.PRODUCTION_ENV) {
    case 'prod':
      Client.user.setActivity('💻')
      break
    default:
      Client.user.setActivity('💻 Dev Mode')
  }
  console.log('Bot loaded.')
})

// Message events
Client.on('message', async (msg) => {
  if (msg.author.bot) return
  if (msg.content.startsWith(';')) {
    // Moderation
    if (Core.CheckCommand('ban', msg, Commands.Moderation.Ban)) return
    if (Core.CheckCommand('kick', msg, Commands.Moderation.Kick)) return

    // Utility
    if (Core.CheckCommand('ping', msg, Commands.Utility.Ping)) return
    if (Core.CheckCommand(['user', 'userinfo'], msg, Commands.Utility.User)) return

    console.log('No command found')
  }
})

Client.on('guildCreate', async (guild) => {
  console.log(`Bot has joined new server: ${guild.name} - Owned by: ${guild.owner.user.tag} (${guild.ownerID})`)
})

Client.on('guildDelete', async (guild) => {
  if (!guild.available) return
  console.log(`Bot has left server: ${guild.name} - Owned by: ${guild.owner.user.tag} (${guild.ownerID})`)
})

Client.login(process.env.BOT_TOKEN)
