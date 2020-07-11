import * as tokenFile from './tokenFile';
const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log('Autobots, rollout!');
});

bot.on('message', (msg) => {
    if (msg.content.includes('penis')) {
        msg.reply(
            'KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK'
        );
    }
});

bot.login(tokenFile.token);
