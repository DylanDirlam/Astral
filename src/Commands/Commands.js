/*
 * This file organizes all commands and their relevant information. Make sure to update it when adding/editing commands. Feel free to add yourself to the contributors for it if you make a change.
 * Please order the commands as they would make sense in the help menu.
 *
 * Options are as follows:
 * name
 * category
 * format: ;command <required> [optional|optional2]
 * aliases: pipe separated
 * description
 * contributors: comma separated
*/
module.exports = {
  help: {
    name: 'Help',
    category: 'Utility',
    format: ';help [command|page]',
    description: 'Displays the help menu. If a command is specified, displays the help text for the command.',
    contributors: 'DylanDirlam'
  },
  ban: {
    name: 'Ban',
    category: 'Moderation',
    format: ';ban <user> [reason]',
    description: 'Bans a user from the server. If a reason is provided, it will direct message them the reason.',
    contributors: 'DylanDirlam'
  },
  kick: {
    name: 'Kick',
    category: 'Moderation',
    format: ';kick <user> [reason]',
    description: 'Kicks a user from the server. If a reason is provided, it will direct message them the reason.',
    contributors: 'DylanDirlam'
  },
  ping: {
    name: 'Ping',
    category: 'Utility',
    format: ';ping',
    description: 'Pong.',
    contributors: 'DylanDirlam'
  },
  user: {
    name: 'User',
    category: 'Utility',
    format: ';user [user]',
    aliases: ';userinfo',
    description: 'Displays account and server-related information about the user.',
    contributors: 'DylanDirlam'
  }
}
