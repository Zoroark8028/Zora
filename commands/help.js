const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Lista de comandos")
 .setDescription(`

**Moderativos**
anuncio
 
**Informativos**
ping,uptime,sicon(servericon),userinfo`)
 message.channel.send(embed)
}