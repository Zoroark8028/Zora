const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

 let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data)
        money.length = 10;
        let finalLb = "";
        for (var i in money) {
          finalLb += `**${money.indexOf(money[i])+1}.**   <@${money[i].ID.slice(25)}> **-** \`${money[i].data} ZoraMoedas\`\n`;
        }
     
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff0000")
        .addField(`<:lanchando:760219665933795409> **|** Top Burguêses de ZoraMoedas`, finalLb, false)
        message.channel.send(embed)
}