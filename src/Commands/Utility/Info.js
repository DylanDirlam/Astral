const Package = require('./../../../package.json')
const Core = require('./../../Core/Index.js')
const Discord = require('discord.js')

module.exports = function (msg) {
  const Description = Package.description
  const License = Package.license
  const Version = Package.version
  const GitHub = Package.homepage
  const BotAvatar = Core.BotAvatarURL

  const EmbedMessage = new Discord.MessageEmbed()
    .setAuthor('Astral', BotAvatar)
    .setColor('#cf0500')
    .setDescription(Description)
    .addFields(
      { name: 'Version', value: `v${Version}`, inline: true },
      { name: 'License', value: License, inline: true },
      { name: 'GitHub', value: `[Astral on GitHub](${GitHub})`, inline: true },
      { name: 'Serving', value: `${msg.client.users.cache.size} users on ${msg.client.guilds.cache.size} servers.`, inline: true },
      { name: 'Add to Your Server', value: '[Click here](https://discord.com/oauth2/authorize?client_id=714264187869593601&scope=bot&permissions=8)', inline: true }
    )
    .setImage(Core.BotLogoURL)
  msg.channel.send(EmbedMessage)
}
