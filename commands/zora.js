const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

let user = message.member;

  const help = new Discord.MessageEmbed()
   .setColor('BLUE')
.setTitle('Utilize z.ajuda para ver meus comandos!')    
.setDescription(`
    
**🔹 z.zora**
\`Pergunte coisas á mim, qual será minha reação?\`

**🔹 Como Usar**    
\`z.zora {pergunta}\`

**🔹 Exemplos**
\`z.zora você é um bot?\``)
  
  let responses = [
"<:cat_toes_coca:830956888871010314>・Tanto faz.",
        "<:hihihi:763836612114513930>・Sim",
"<:sadcat4:830263376667607080>・essa pergunta me deixou triste ",
        "<:Leon_Shark_Triste:807662645326905366>・Não",
        "<:Sandy_Joinha:807660320700760115>・Muito interresante",
        "<:lanchando:760219665933795409>・Que tal você ir estudar?",
        "<:Bibi_Raiva:807663391144935484>・Não, Não,Não",
"<:Shelly_Bruxa_Feliz:807667755885133884>・Zora Aprova!",
   "<:El_Brown_Amor:807662132048035840>・Faz sentido.",
            "<:Rico_Assustado:807655918606090281>・hm, pensando bem, eu nunca pensei nisto!",
"<:tatonamesa:758494052777197608>・... serio?","<:cat_toes_coca:830956888871010314>・Legal",'a'];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      const embed = new Discord.MessageEmbed()
 
      .setColor("BLUE")
 .setTitle("Zora Responde!")
 .setDescription(`Pergunta: **${args.join(' ')}**

Resposta: **${response}**`)
      .setFooter(`Autor(a) • ${message.author.tag}`)
if(!args[0]) return message.reply(help);

message.channel.send(embed)
}