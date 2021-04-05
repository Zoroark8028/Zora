const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setDescription(`[aqui](https://zora.glitch.me)`)
 message.channel.send(embed)
  }