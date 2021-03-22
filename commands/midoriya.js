const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("oi midoriya")
 .setImage(``)
message.channel.send(embed) 
}
