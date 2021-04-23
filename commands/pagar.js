const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args, guilds) => {
  
 let user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
 
  let member = db.fetch(`money_${message.author.id}`)

  if (!user) {
      return message.channel.send(`🔹 ${message.author}, como paga o vento?`)
}
 if (!args[1]) {
      return message.channel.send(`🔹 ${message.author}, esqueceu de utilizar o comando de forma certa, né!
      \`z.pagar {menção} {quantidade}\``)
}
    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      message.channel.send(`🔹 ${message.author}, cd o número? nn sei`)
     return  
}
    if (message.content.includes('-')) { 
      return message.channel.send(`🔹 ${message.author}, você não pode usar dinheiro negativo, bobinho(a)!`)
  }
  if (member < args[1]) {
      return message.channel.send(`🔹 ${message.author}, como você vai pagar alguém com algo que você não tem? `)
   }
  message.channel.send(`🔹 **Sucesso**, **${message.author}**, você pagou **${args[1]} ZoraMoedas** para **${user}**!`)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])
}