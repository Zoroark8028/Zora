const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

let user = message.mentions.members.first() || message.author
let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data)
        money.length = 10;
        let finalLb = "";
        for (var i in money) {
          finalLb += `**${money.indexOf(money[i])+1}.**     <@${money[i].ID.slice(25)}> - \`${money[i].data} €\`\n`;
        }
        
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setColor("#ff0000")
        .addField(`Leaderboards`, finalLb, false)
        message.channel.send(embed);
}