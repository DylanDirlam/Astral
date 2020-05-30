const Discord = require('discord.js')
const Core = require('./../../Core/Index.js')
const Commands = require('./../Commands.js')
const NumOfCommands = require('./../../Core/Common/CountCommands.js')

module.exports = function (msg) {
  const arg = msg.content.toLowerCase().split(' ').slice(1, 2)
  let CommandsPerPage = 10
  CommandsPerPage = NumOfCommands() >= CommandsPerPage ? CommandsPerPage : NumOfCommands() // If there are less commands than there are in a full page, default to number of commands
  const MaxPages = Math.ceil(NumOfCommands() / CommandsPerPage)
  const CommandsValues = Object.values(Commands)
  let Offset = 0
  let Page = 1

  // If a page number is specified, do the offset logic for commands
  if (Number.isInteger(Number(arg)) && arg.length > 0) {
    Page = arg
    if (Page < 1) { Page = 1 }
    if (Page > MaxPages) { Page = MaxPages }
    Offset = (Page * CommandsPerPage) - CommandsPerPage
  }

  // If there are no arguments, display the default help menu
  if (arg.length === 0 || Number.isInteger(Number(arg))) {
    let description = ''

    // Loop through the commands in the list and add them to the description
    for (let count = Offset; count < Offset + CommandsPerPage; count++) {
      const Command = CommandsValues[count]
      if (!Command) {
        // If this is the last command for the page, don't want to try to reference a nonexistent value
        continue
      }
      description += `\`${Command.format}\`\n🔸 ${Command.description}\n\n`
    }

    const EmbedMessage = new Discord.MessageEmbed()
      .setAuthor(`Command Help — Page ${Page} of ${MaxPages}`, Core.BotAvatarURL)
      .setColor('#cf0500')
      .setDescription(description)
    msg.channel.send(EmbedMessage)
    return
  }

  // Checking info for a command
  const Command = Commands[arg]
  if (!Command) {
    msg.channel.send(`Cannot find a command for ${arg}`)
    return
  }

  const EmbedMessage = new Discord.MessageEmbed()
    .setAuthor('Command Help', Core.BotAvatarURL)
    .setColor('#cf0500')
    .setDescription(
      `**Name:** ${Command.name}\n` +
      `**Category:** ${Command.category}\n` +
      `**Command Usage:** ${Command.format}\n` +
      `**Description:** ${Command.description}`
    )
  msg.channel.send(EmbedMessage)
}
