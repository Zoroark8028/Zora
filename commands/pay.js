const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('z.'))return;  

  let user = message.mentions.members.first() 

  let member = db.fetch(`zm_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**Mencione alguem!**`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`Usagem Correta
**z.pay {menção} {quantidade}**`);
 
  if (!args[1]) {
      return message.channel.send(embed2)

if (isNaN(args[1][1])) return message.channel.send(`**Isso não é um número, tá me fazendo de palhaça, é?!** :rage:`)

}
    let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não pode usar dinheiro negativo!*`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não tem ZoraMoedas o suficiente!*`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`Você deu **${args[1]} ZoraMoedas** para ${user.user.username}.`);

  message.channel.send(embed5)
  db.add(`zm_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`zm_${message.guild.id}_${message.author.id}`, args[1])
}

module.exports.help = {
  name:"pay",
  aliases: ["pagar"]
}
