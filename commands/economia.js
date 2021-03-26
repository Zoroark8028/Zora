const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Moderação, o que os comandos fazem?")
 .setDescription(`


c
`)
.setFooter('Os {} são argumentos! Não utilize os no comando!')

 message.channel.send(embed)
}
