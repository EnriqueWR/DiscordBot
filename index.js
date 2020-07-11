const Discord = require('discord.js');
const bot = new Discord.Client();
const token = 'NzMxMjk4MjQ0NzQ3MDY3NDc2.XwkArQ.QC2bsbvQGymqZ5qc5lilHFCTBTE';

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

bot.login(token);
