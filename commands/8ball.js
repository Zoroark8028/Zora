const Discord = require('discord.js')

module.ex
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
 .setDescription(`${response}`)ports.run = async (client, message, args) => {
if(!args[1]) return message.reply("Por favor coloque uma pergunta");

message.channel.send(embed)
}