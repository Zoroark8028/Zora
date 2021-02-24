const Discord = require('discord.js');


exports.run = async (client, message, args) => {

 let embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setDescription("**Ícone do servidor**")
 .setImage(message.guild.iconURL({ dynamic: true, format: 'png', size: 1024}))

 message.channel.send(embed);

};

exports.conf = {
 enabled: true, 
 guildOnly: true, 
 aliases: ["svicon", "servericon",],
 permLevel: 0 
};

exports.help = {
 name: 'servericon', 
 description: 'Mostra o ícone do servidor',
 usage: 'z!servericon'
};