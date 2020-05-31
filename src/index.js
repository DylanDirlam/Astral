const Discord = require('discord.js')
const Client = new Discord.Client()
const Moment = require('moment')
const Core = require('./Core/Index.js')
const Commands = require('./Commands/Index.js')
const Package = require('./../package.json')
require('dotenv').config()
process.on('unhandledRejection', (reason, p) => {
  console.log(`${Moment().format('YYYY-mm-dd H:i:s')}: Unhandled Rejection at: Promise`, p, 'reason:', reason)
})

// Startup Code once bot is loaded
Client.on('ready', () => {
  Client.user.setActivity(`v${Package.version} ;help`)
  console.log('Bot loaded.')
})

// Message events
Client.on('message', async (msg) => {
  if (msg.author.bot) return
  if (!msg.content.startsWith(';')) return

  // Moderation
  if (Core.CheckCommand('ban', msg, Commands.Moderation.Ban)) return true
  if (Core.CheckCommand('kick', msg, Commands.Moderation.Kick)) return true

  // Utility
  if (Core.CheckCommand('help', msg, Commands.Utility.Help)) return true
  if (Core.CheckCommand('info', msg, Commands.Utility.Info)) return true
  if (Core.CheckCommand('ping', msg, Commands.Utility.Ping)) return true
  if (Core.CheckCommand(['user', 'userinfo'], msg, Commands.Utility.User)) return true
})

Client.on('guildCreate', async (guild) => {
  console.log(`Bot has joined new server: ${guild.name} - Owned by: ${guild.owner.user.tag} (${guild.ownerID})`)
})

Client.on('guildDelete', async (guild) => {
  if (!guild.available) return
  console.log(`Bot has left server: ${guild.name} - Owned by: ${guild.owner.user.tag} (${guild.ownerID})`)
})

Client.login(process.env.BOT_TOKEN)
