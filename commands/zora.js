const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

  let responses = [
        "<:hihihi:763836612114513930>・Sim",
        "<:Leon_Shark_Triste:807662645326905366>・Não",
        "<:Sandy_Joinha:807660320700760115>・Muito interresante",
        "<:lanchando:760219665933795409>・Que tal você ir estudar?",
        "<:Bibi_Raiva:807663391144935484>・Não, Não,Não",
"<:Shelly_Bruxa_Feliz:807667755885133884>・Zora Aprova!",
   "<:El_Brown_Amor:807662132048035840>・Faz sentido.",
            "<:Rico_Assustado:807655918606090281>・hm, pensando bem, eu nunca pensei nisto!",
"<:tatonamesa:758494052777197608>・Tome agua, Hidrata-se!","<:cat_toes_coca:830956888871010314>・Legal",":zap:・Incrível! ",'a'];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      const embed = new Discord.MessageEmbed()
    
      .setColor("#ff0000")
 .setTitle("Zora Responde!")
 .setDescription(`Pergunta: **${args.join(' ')}**

Resposta: **${response}**`)
      .setFooter(`Autor(a) • ${message.author.tag}`)
if(!args[0]) return message.reply("<:Bibi_Raiva:807663391144935484> | Por favor, coloque uma pergunta");

message.channel.send(embed)
}