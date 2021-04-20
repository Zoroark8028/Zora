const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

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
    `${args[0]}`,`{args`,'a'];
      let response =
        responses[Math.floor(Math.random() * responses.length - 1)];
      const embed = new Discord.MessageEmbed()
    
      .setColor("#ff0000")
 .setTitle("Zora Responde!")
 .setDescription(`Pergunta: **${args.join(' ')}**

Resposta: **${response}**`)
      .setFooter(`Autor(a) • ${message.author.tag}`)
if(!args[0]) return message.reply(help);

message.channel.send(embed)
}