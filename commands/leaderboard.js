const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.author
let money = db.startsWith(`money_${user.id}_${message.guild.id}`, { sort: '.data' })
let content = "";

for (let i = 0; i < money.length; i++) {
    let user = bot.users.get(money[i].ID.split('_')[1]).username

    content += `${i+1}. ${user} ~ ${money[i].data} snb\n`
}

const embed = new Discord.RichEmbed()
.setAuthor(`${message.guild.name} - Top players!`, message.guild.iconURL)
.setDescription(content)
.setColor(2686950)

message.channel.send(embed)
}