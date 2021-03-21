const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('z.'))return;  
  let ownerID = '803363145921462272'
  if(message.author.id !== ownerID) return;

  let user = message.mentions.members.first() || message.member;

    if (isNaN(args[1])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`sucesso removido ${args[1]} coins\n\n ${bal}`);
    message.channel.send(Embed);
}