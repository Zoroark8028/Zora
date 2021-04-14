const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: "bal",
    description: "bleh",

    async run (client, message, args) {

let user = message.mentions.members.first() ||  message.guild.members.cache.find(user => user.user.username.toLowerCase() === args.join(" ").toLowerCase()) ||
    message.guild.members.cache.get(args[0])
   
if (!args[0]) {
      return message.channel.send(`**Mencione um usuario!**`)
}

        let bal = await db.fetch(`money_${user.id}`);
        if(bal === null) bal = 0;

       message.channel.send(`*\`${user.user.tag}\`*, tem **${bal} ZoraMoedas**`)  
    
    }
}


