const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, guilds) => {
  
 let user = message.mentions.users.first() || message.guild.members.cache.find(user => user.user.username.toLowerCase() === args.join(" ").toLowerCase()) ||
    message.guild.members.cache.get(args[0])
 
  let member = db.fetch(`money_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`**Mencione alguem!**`);

  if (!user) {
      return message.channel.send(`🔹 ${message.author}, como paga o vento?`)

}

  let embed2 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`Usagem Correta
**z.pagar {menção} {quantidade}**`);
 
 if (!args[1]) {
      return message.channel.send(`🔹 ${message.author}, esqueceu de utilizar o comando de forma certa, né!
      \`z.pagar {menção} {quantidade}\``)
}

    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.channel.send(`🔹 ${message.author}, cd o número? nn sei`)
     return  
}
    let embed3 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não pode usar dinheiro negativo!*`);


    if (message.content.includes('-')) { 
      return message.channel.send(`🔹 ${message.author}, você não pode usar dinheiro negativo, bobinho(a)!`)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`*Você não tem ZoraMoedas o suficiente!*`);

  if (member < args[1]) {
      return message.channel.send(`🔹 ${message.author}, como você vai pagar alguém com algo que você não tem? `)
   }
  let embed5 = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setDescription(`🔷 ・ **Sucesso**, **${message.author.tag}** transferiu **${args[1]} ZoraMoedas** para **${user}**!`);
 


  message.channel.send(`🔹 **Sucesso**, **${message.author}**, você pagou **${args[1]} ZoraMoedas** para **${user}**!`)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])
}

module.exports.help = {
  name:"pay",
  aliases: ["pagar"]
}
