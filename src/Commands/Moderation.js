const Discord = require('discord.js')

module.exports = {
  Kick: async function (msg) {
    // Check if the command runner has permission to kick members
    if (!msg.member.permissions.has('KICK_MEMBERS')) {
      msg.reply("You don't have permission to kick users.")
      return
    }

    // Check if they tagged a user
    const MentionedUser = msg.mentions.users.first()
    if (!MentionedUser) {
      msg.reply('You did not tag a user to kick.')
      return
    }

    // Find the user in the server
    const MentionedMember = await msg.guild.members.fetch(MentionedUser.id)
    if (!MentionedMember) {
      msg.reply('Could not find the mentioned user in the server.')
      return
    }

    // Check if the user can be kicked
    if (!MentionedMember.kickable) {
      msg.reply('I cannot kick that user. Nice try.')
      return
    }

    const Reason = msg.content.split(' ').slice(2).join(' ')
    const EmbedMessage = new Discord.MessageEmbed()
      .setAuthor('User Kicked', msg.author.avatarURL())
      .setColor('#cf0500')
      .setDescription(`${msg.member.toString()} kicked ${MentionedMember.toString()} from the server.`)
      .addFields(
        { name: '**Source User**', value: `Tag: ${msg.author.tag}\nID: ${msg.author.id}`, inline: true },
        { name: '**Target User**', value: `Tag: ${MentionedUser.tag}\nID: ${MentionedUser.id}`, inline: true }
      )
      .setTimestamp()
    if (Reason) {
      EmbedMessage.addField('**Reason**', `${Reason}`)
    }
    msg.channel.send(EmbedMessage)
    MentionedMember.kick(`Kicked by ${msg.author.tag} via Astral: ${Reason}`)
  },
  Ban: async function (msg) {
    // Check if the command runner has permission to ban members
    if (!msg.member.permissions.has('BAN_MEMBERS')) {
      msg.reply("You don't have permission to ban users.")
      return
    }

    // Check if they tagged a user
    const MentionedUser = msg.mentions.users.first()
    if (!MentionedUser) {
      msg.reply('You did not tag a user to ban.')
      return
    }

    // Find the user in the server
    const MentionedMember = await msg.guild.members.fetch(MentionedUser.id)
    if (!MentionedMember) {
      msg.reply('Could not find the mentioned user in the server.')
      return
    }

    // Check if the user can be kicked
    if (!MentionedMember.bannable) {
      msg.reply('I cannot ban that user. Nice try.')
      return
    }

    const Reason = msg.content.split(' ').slice(2).join(' ')
    const EmbedMessage = new Discord.MessageEmbed()
      .setAuthor('User Banned', msg.author.avatarURL())
      .setColor('#cf0500')
      .setDescription(`${msg.member.toString()} banned ${MentionedMember.toString()} from the server.`)
      .addFields(
        { name: '**Source User**', value: `Tag: ${msg.author.tag}\nID: ${msg.author.id}`, inline: true },
        { name: '**Target User**', value: `Tag: ${MentionedUser.tag}\nID: ${MentionedUser.id}`, inline: true }
      )
      .setTimestamp()
    if (Reason) {
      EmbedMessage.addField('**Reason**', `${Reason}`)
    }
    msg.channel.send(EmbedMessage)
    MentionedMember.ban({
      reason: `Banned by ${msg.author.tag} via Astral: ${Reason}`
    })
  }
}
