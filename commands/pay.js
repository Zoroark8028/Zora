const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('z.'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`zm_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`mencione alguem`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`especifique a quantidade de zoramoedas`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`sei la powa`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`você preguiça nao tem money`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new https://www.youtube.com/watch?v=jy_LWMQvCZw
  .setColor("#FFFFFF")
  .setDescription(`Você pagou ${user.user.name} ${args[1]} zm`);

  message.channel.send(embed5)
  db.add(`zm_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`zm_${message.guild.id}_${message.author.id}`, args[1])

}

module.exports.help = {
  name:"pay",
  aliases: [""]
}