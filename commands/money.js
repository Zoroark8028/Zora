const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

if (!args[0]) { return message.channel.send(`${message.author}, *eu acho que você esqueceu de mencionar alguem*`)

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

        let bal = await db.fetch(`zm_${message.guild.id}_${user.id}`);
        if(bal === null) bal = 0;

       message.channel.send(`${user}, tem **${bal} ZoraMoedas**`)  
    
    }
   }
}
