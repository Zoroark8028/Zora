const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

   let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed() 
    .setColor(`BLUE`) 
    .setTitle(`Avatar de ${user.username}`) 
.setDescription(`Que avatar fofitcho!`)
    .setImage(avatar) 
    .setFooter(`・ Autor(a): ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 

};