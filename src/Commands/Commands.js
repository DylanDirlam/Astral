/*
 * This file organizes all commands and their relevant information. Make sure to update it when adding/editing commands. Feel free to add yourself to the contributors for it if you make a change.
 *
 * Options are as follows:
 * name
 * format: ;command <required> [optional|optional2]
 * aliases: pipe separated
 * description
 * contributors: comma separated
*/

module.exports = {
  Moderation: {
    Ban: {
      name: 'Ban',
      format: ';ban <user> [reason]',
      description: 'Bans a user from the server. If a reason is provided, it will direct message them the reason.',
      contributors: 'DylanDirlam'
    },
    Kick: {
      name: 'Kick',
      format: ';kick <user> [reason]',
      description: 'Kicks a user from the server. If a reason is provided, it will direct message them the reason.',
      contributors: 'DylanDirlam'
    }
  },
  Utility: {
    Ping: {
      name: 'Ping',
      format: ';ping',
      description: 'Pong.',
      contributors: 'DylanDirlam'
    },
    User: {
      name: 'User',
      format: ';user [user]',
      aliases: ';userinfo',
      description: 'Displays account and server-related information about the user.',
      contributors: 'DylanDirlam'
    }
  }
}
