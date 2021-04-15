const Discord = require("discord.js");
const db = require('quick.db');
module.exports.run = async (client, message, args) => {

   let money = db.all().filter(data => data.ID.startsWith(`money`)).sort((a, b) => b.data - a.data)
    money.length = 10;
    var finalLb = "";
    for (var i in money) {
      finalLb += `**${money.indexOf(money[i])+1}. ${client.users.cache.get(money[i].ID.split('_')[1]) ? client.users.cache.get(money[i].ID.split('_')[1]).tag : "Usuario Desconhecido"}** - ${money[i].data} \n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Ranking de ZoraMoedas!`)
    .setColor("#7289da")
    .setDescription(finalLb)
    .setFooter('Ranking')
    .setTimestamp()
    message.channel.send(embed);
}