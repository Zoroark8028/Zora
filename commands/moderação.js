const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Moderação, o que os comandos fazem?")
 .setDescription(`
**z.anuncio** \n Anuncie um evento/novidade usando esse comando!

**z.sorteio** \n Faça um sorteio usando o template, "z.sorteio 10m/10h/10d #canal-do-sorteio {premio}  
`)
.setFooter('Os {} são argumentos! Não utilize os no comando!')

 message.channel.send(embed)
}

