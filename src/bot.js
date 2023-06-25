import { config } from 'dotenv';
config({ path: '.env' })

import { Client, Intents, Message } from 'discord.js'; 

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
bot.on('ready', () => console.log('ready'));
bot.on('message', async(msg) =>{
    //if(msg.author.bot) return;

    //await msg.reply("yahoo~")
    
    if (msg.author.bot){
        return 
    }
    if (msg.content.startsWith('!Kumi')){
        msg.reply("Kumi here!!")
    }
    if (msg.content.startsWith('!Dkumi')){
        let msgcontent = msg.content.replace("!Dkumi","")
        msg.member.send("You have summoned Kumi!!")
    }
    If (msg.content.startsWith('!hey Kumi')){
        Let msgcontent = msg.content.replace("!hey Kumi","") 
        msg.member.send("How may I assist you?")
})
bot.login(process.env.BOT_TOKEN);

