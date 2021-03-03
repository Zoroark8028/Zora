const Discord = require('discord.js')

 let responses = [
        "Yes",
        "No",
        "Definetly",
        "Absoloutely",
        "Not in a million years",
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      let embed = new Discord.MessageEmbed()
       .setColor("#ff0000")
 .setTitle("8ball")
 .setDescription(`${response}`)
message.channel.send(embed)
}