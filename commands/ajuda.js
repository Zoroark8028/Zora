const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Lista de comandos")
 .setDescription(`

**Moderativos**
anuncio,sorteio 
 
**Informativos**
ping,uptime,servericon,userinfo
botinfo,serverinfo,avatar

**Utilitarios**
convidar,zora,quiz`)
 message.channel.send(embed)
}