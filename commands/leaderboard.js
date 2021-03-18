const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith('z.'))return;  

    const embed = new Discord.MessageEmbed()
    .setDescription(`**PAra ver o leaderboard de **ZoraMoedas**\n\nCoin Leaderboard: m!leaderboard coins`)
    .setColor("#FFFFFF")


  if(!args[0]) return message.channel.send(embed)

    if (args[0] == 'moedas') {
    let money = db.startsWith(`zm_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = bot.users.get(money[i].ID.split('_')[2]).username

      

        content += `${i+1}. ${user} ~ ${money[i].data}\n`
    
      }

    const embed = new Discord.MessageEmbed()
    .setDescription(`**${message.guild.name}'s Coin Leaderboard**\n\n${content}`)
    .setColor("#FFFFFF")

      }

    message.channel.send(embed)
  
}
module.exports.help = {
  name:"leaderboard",
  aliases: ["leader"]
}