const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

let user = message.mentions.members.first() || message.author
 let zm = db.all().filter(data => data.ID.startsWith(`zm`)).sort((a, b) => b.data - a.data)
    zm.length = 10;
    var finalLb = "";
    for (var i in zm) {
      finalLb += `**${zm.indexOf(zm[i])+1}. <@${client.users.cache.get(zm[i].ID.split('_')[1]) ? client.users.cache.get(zm[i].ID.split('_')[1]).tag : "User#0000"}>** - ${zm[i].data} :dollar:\n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard!`, message.guild.iconURL())
    .setColor("#7289da")
    .setDescription(finalLb)
    .setFooter(client.user.tag, client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(embed);
}