const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args, guilds) => {
  
const help = new Discord.MessageEmbed()
   .setColor('BLUE')
.setTitle('Utilize z.ajuda para ver meus comandos!')    
.setDescription(`
    
**🔹 z.pagar**
\`Dê Zoramoedas á alguém.\`

**🔹 Como Usar**    
\`z.pagar {usuario} {quantidade}\`

**🔹 Exemplos**
\`z.pagar @Zoroark#8028 1000\``)
   
 let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) 
 
  let member = db.fetch(`money_${message.author.id}`)

if (!user) {
return message.reply(help)
}
  
 if (!args[1]) {
       return message.channel.send(`🔹 ${message.author}, cd o número? nn sei`)
 }
    const coinsToGive = args[1]
    if (isNaN(coinsToGive)) {
      return message.channel.send(`🔹 ${message.author}, isso não é um número ou eu preciso de oculos?`)
    }
    
  if (message.content.includes('-')) { 
      return message.channel.send(`🔹 ${message.author}, você não pode usar dinheiro negativo, bobinho(a)!`)
    }
  if (member < args[1]) {
      return message.channel.send(`🔹 ${message.author}, como você vai pagar alguém com algo que você não tem?`)
  }
  message.channel.send(`🔹 **Sucesso**, **${message.author}**, você pagou **${args[1]} ZoraMoedas** para **${user}**!`)
  db.add(`money_${user.id}`, args[1])
  db.subtract(`money_${message.author.id}`, args[1])
}