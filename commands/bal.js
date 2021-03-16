const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let bal = await db.fetch(`zm_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

       message.channel.send(`${user}, tem **${bal} ZoraMoedas**`)  
    
    }
}