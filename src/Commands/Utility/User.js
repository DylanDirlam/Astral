const Discord = require('discord.js')
const Moment = require('moment-timezone')

module.exports = async function (msg) {
  const Mentions = msg.mentions.users
  let MentionedUser = Mentions.first()
  if (!MentionedUser) {
    MentionedUser = msg.author
  }
  const MentionedMember = await msg.guild.members.fetch(MentionedUser.id)
  const CreatedTimestamp = Moment(MentionedUser.createdTimestamp).tz('America/New_York').format('MMMM Do YYYY, h:mmA z')
  const JoinedTimestamp = Moment(MentionedMember.joinedTimestamp).tz('America/New_York').format('MMMM Do YYYY, h:mmA z')
  const RolesArray = []
  MentionedMember.roles.cache.forEach(role => {
    if (role.rawPosition === 0) return // Position 0 is @everyone
    RolesArray.push(role.toString())
  })
  const RolesString = RolesArray.join(', ')

  const EmbedMessage = new Discord.MessageEmbed()
    .setAuthor(`User Info for ${MentionedUser.tag}`)
    .setImage(MentionedUser.avatarURL())
    .setColor('#cf0500')
    .addFields(
      { name: '**Display Name**', value: `${MentionedMember.displayName}`, inline: true },
      { name: '**Tag**', value: `${MentionedUser.tag}`, inline: true },
      { name: '**User ID**', value: `${MentionedUser.id}` },
      { name: '**Account Created**', value: `${CreatedTimestamp}`, inline: true },
      { name: '**Account Joined**', value: `${JoinedTimestamp}`, inline: true },
      { name: '**Roles**', value: `${RolesString || 'None'}` }
    )

  if (MentionedMember.premiumSinceTimestamp) {
    EmbedMessage.addField('**Nitro Boosting**', `<:boost:714560778329653379> Boosting this server since ${Moment(MentionedMember.premiumSinceTimestamp).format('MMMM Do YYYY, h:mma')}`)
  }
  msg.channel.send(EmbedMessage)
}
