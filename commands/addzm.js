const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 if(!['803363145921462272'].includes(message.author.id)) return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`zm_${message.guild.id}_${message.author.id}`)

   let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`${message.author.username} deu **${args[1]} ZoraMoedas** para ${user.user.username}.`);

  message.channel.send(embed)
  db.add(`zm_${message.guild.id}_${user.id}`, args[1])
}

module.exports.help = {
  name:"pay",
  aliases: ["pagar"]
}
