const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, guilds) => {
  
 let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
 
  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**Mencione alguem!**`);

  if (!user) {
      return message.channel.send(`🔹 **|** ${message.author}, como paga o vento?`)

}

  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`Usagem Correta
**z.pagar {menção} {quantidade}**`);
 
 if (!args[1]) {
      return message.channel.send(`Usagem Correta
**z.pagar {menção} {quantidade}**`)
}

    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.reply(`🔹 **|** $message.author, `)
     return  
}
    let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não pode usar dinheiro negativo!*`);


    if (message.content.includes('-')) { 
      return message.channel.send(`*Você não pode usar dinheiro negativo!*`)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não tem ZoraMoedas o suficiente!*`);

  if (member < args[1]) {
      return message.channel.send(`*Você não tem ZoraMoedas o suficiente!*`)
   }
  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`🔷 ・ **Sucesso**, **${message.author.tag}** transferiu **${args[1]} ZoraMoedas** para **${user.tag}**!`);
 


  message.channel.send(`🔷 ・ **Sucesso**, **${message.author}** transferiu **${args[1]} ZoraMoedas** para **${user}**!`)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])
}

module.exports.help = {
  name:"pay",
  aliases: ["pagar"]
}
