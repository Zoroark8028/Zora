const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Lista de comandos")
 .setDescription(`
z.anuncio - **Anuncie um evento/novidade usando esse comando!**

z.sorteio - **Faça um sorteio usando o template, ""

`)

 message.channel.send(embed)
}

