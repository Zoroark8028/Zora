const Discord = require("discord.js");

const client = new Discord.Client(); 

module.exports.run = async (bot, message, args) => {
 if(!['803363145921462272'].includes(message.author.id)) return;  

    const clientnickname = args.join(" ");
        
    message.guild.members.cache.get(client.user.id)
	.setNickname(clientnickname);
    message.channel.send('Prontinho!');

     }
