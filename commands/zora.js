const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {


  let responses = [
        "<:hihihi:763836612114513930>・Sim",
        "<:Leon_Shark_Triste:807662645326905366>・Não",
        "・Muito interresante",
        "・Que tal você ir estudar?",
        "・Não, Não,Não",
"・Zora Aprova!",
   "・Faz sentido.",
            "・hm, pensando bem, eu nunca pensei nisto!"];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      const embed = new Discord.MessageEmbed()
       .setColor("#ff0000")
 .setTitle("Zora Responde!")
 .setDescription(`Para: ${message.author.tag},
**${response}**`)
if(!args[0]) return message.reply("Por favor coloque uma pergunta");

message.channel.send(embed)
}