const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Lista de comandos")
 .setDescription(`

**Moderativos**
<:hihihi:763836612114513930> ・ anuncio,sorteio 
 
**Economia**
<:stonks:690245363566903333> ・ bal, money, daily 

**Informativos**
<:742756936050671706:771911635924418590> ・ ping, uptime, servericon, userinfo
botinfo, serverinfo, avatar

**Utilitarios**
<:lanchando:760219665933795409> ・ convidar, zora, quiz`)
 message.channel.send(embed)
}

