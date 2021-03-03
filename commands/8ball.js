const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 let question = message.content.slice(message.length + 6);
    if (!question);

 let responses = [
        "Sim",
        "Não",
        "Muito interresante",
        "Que tal você ir estudar?",
        "Não, Não,Não"
      ];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      const embed = new Discord.MessageEmbed()
       .setColor("#ff0000")
 .setTitle("8ball")
 .setDescription(`''${!question}'', ${response}`)
if(!args[0]) return message.reply("Por favor coloque uma pergunta");

message.channel.send(embed)
}