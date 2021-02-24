const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setTitle("Lista de comandos")
 .setDescription(`
 
 Informativos
 ping,uptime,`)
 message.channel.send(embed)
}