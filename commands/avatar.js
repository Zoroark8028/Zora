const Discord = require("discord.js"); 

exports.run = async (client, message, args) => {

   let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
  
  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

        let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let Embed = new MessageEmbed()
        .setTitle(`8Ball!`)
        .setDescription(`Your question: ${question}\nMy reply: ${response}`)
        .setColor(`RANDOM`);
      message.channel.send(Embed);
    }
  },
};
    .setColor(`#ff0000`) 
    .setTitle(`Avatar de ${user.username}`) 
.setDescription(`Que avatar fofo!`)
    .setImage(avatar) 
    .setFooter(`・ Autor(a): ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
 await message.channel.send(embed); 

};