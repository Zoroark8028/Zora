const Discord = require('discord.js');

exports.run = async (client, message, args) => {
 if(!['803363145921462272', '583408510184718336'].includes(message.author.id)) return;
     
const help = new Discord.MessageEmbed()
   .setColor('BLUE')
.setTitle('Utilize z.ajuda para ver meus comandos!')    
.setDescription(`
    
**🔹 z.e **
\`Execute códigos da libraria discord.js direto do discord!\`

**🔹 Como Usar**    
\`z.e {codigo}\`

**🔹 Exemplos**
\`z.e message.channel.send('Olá')\`
   
**🔹 Permissões**
\`Dono Do Bot\` 
`)
      
   let conteudo = args.join(" ");
 
 if(!conteudo) {
 return message.channel.send(help)
 }
 
 let code = args.join(' ')
try {
let ev = eval(code)
message.channel.send('```\n'+ev+'```')
} catch(err) {
message.channel.send('```\n'+err+'```')
}
   }
