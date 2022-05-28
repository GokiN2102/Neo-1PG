import { Client, Intents } from 'discord.js'; 
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.login('OTM0MzM2MDEzNDgzMDA4MDQx.YeumOA.en9IXh-yVJyvBcwPAu6qKcCdDW0');
