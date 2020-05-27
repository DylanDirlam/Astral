<h1>
  <img src="https://raw.githubusercontent.com/DylanDirlam/Astral/master/assets/logo.png" height="36" valign="bottom" /> Astral <img src="https://github.com/DylanDirlam/Astral/workflows/Build/badge.svg" align="right">
</h1>

> Astral is a general Discord bot for utility, moderation, and custom commands.

## Getting started with Development

First make sure you have the following:
- [git](https://git-scm.com/)
  - Optional: Get a UI such as [SourceTree](https://www.sourcetreeapp.com/) or [GitHub Desktop](https://desktop.github.com/)
- [Node.js](https://nodejs.org/). We recommend version 12 or newer.

Now you need to pull a copy of the codebase onto your computer. Make a fork of the repo by clicking the **Fork** button at the top of this page. Next, click the green button **Clone or download** and copy your *Clone with HTTPS* URL, and then run the command `git clone <paste link>`. This will take a minute.

- When cloning finishes, open a command window to the source and run the command `npm install`. This will take a minute or two the first time. 
- While it's running, copy the `.env.example` file in the project root, and name it `.env`. Now you need to fill the Bot API key. 
- To get your key, login to [Discord Developer Portal](https://discord.com/developers/) and go to [Applications](https://discord.com/developers/applications). 
- Create an Application named `Astral Dev` or something similar. Then under the Bot section, click the Add Bot button. Now you'll want to add your bot token to the `.env` file you created. Replace `<bot token>` with the token from your Developer Portal. 
- You'll also need to invite the bot to your Discord server where you'll be testing and developing it. Copy this link and replace the `<client id>` with the Client ID on General Information section: `https://discordapp.com/oauth2/authorize?client_id=<client id>&permissions=8&scope=bot` - This will let you invite the bot to your server.

Once all that's done you're ready to fire up the development server! Just run the command `npm start` in the project root. If you have any questions or run into installation troubles, feel free to join us on Discord and ask for help: https://discord.gg/FuRSXeT

## Contributing

When you are done with your changes, commit your work and then push your changes to your fork. To create a pull request, open the GitHub page for your fork and it be updated to show a button *Create pull request. Explain what changes you made. Your PR will be reviewed to find potential issues and merged when everything is approved.
