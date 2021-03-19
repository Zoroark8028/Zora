const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Lista de comandos")
 .setDescription(`

**Moderativos** - {z.moderação}
<:hihihi:763836612114513930> ・ anuncio,sorteio 
 
**Economia**
<:stonks:690245363566903333> ・ bal, money, daily, pay  

**Informativos**
<:742756936050671706:771911635924418590> ・ ping, uptime, servericon, userinfo
botinfo, serverinfo, avatar

**Miscelania**
<:lanchando:760219665933795409> ・ suporte, convidar, zora, quiz`)
 message.channel.send(embed)
}

