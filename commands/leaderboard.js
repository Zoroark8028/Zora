const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

 let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let zm = db.all().filter(data => data.ID.startsWith(`zm`)).sort((a, b) => b.data - a.data)
        zm.length = 10;
        let finalLb = "";
        for (var i in zm) {
          finalLb += `**${zm.indexOf(zm[i])+1}.**     <@${zm[i].ID.slice(25)}> - \`${zm[i].data} ZoraMoedas\`\n`;
        }
     
        
        const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setColor("#ff0000")
        .addField(`Leaderboards`, finalLb, false)
        message.channel.send(embed);
}