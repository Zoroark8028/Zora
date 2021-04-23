const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
 if(!['803363145921462272'].includes(message.author.id)) return;  

  let user = message.mentions.members.first() || bot.users.cache.get(args[0])   

  let member = db.fetch(`money_${message.author.id}`)

  message.channel.send(`🔹 ${message.author} deu ${args.join(" ")} ZoraMoedas para {user}!`)
  db.add(`money_${user.id}`, args[1])
}

module.exports.help = {
  name:"pay",
  aliases: ["pagar"]
}
