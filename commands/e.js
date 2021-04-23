const Discord = require('discord.js')

module.exports = async (client, args, message) => {
if(!['803363145921462272', '583408510184718336', '674656385656422411'].includes(message.author.id)) return;
     
const help = new Discord.MessageEmbed()
   .setColor('BLUE')
.setTitle('Utilize z.ajuda para ver meus comandos!')    
.setDescription(`
    
**:small_blue_diamond: z.e **
\`Execute códigos da libraria discord.js direto do discord!\`

**:small_blue_diamond: Como Usar**    
\`z.e {codigo}\`

**:small_blue_diamond: Exemplos**
\`z.e message.channel.send('Olá')\`
   
**:small_blue_diamond: Permissões**
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