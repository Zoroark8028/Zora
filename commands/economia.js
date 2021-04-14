const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Economia, o que os comandos fazem?")
 .setDescription(`
**z.daily** \n Pegue uma quantia diaria  de ZoraMoedas que varie de **20-320** ZoraMoedas

**z.atm** \n Verifica quantas ZoraMoedas **VOCÊ** tem

**z.pagar** \n Dê ZoraMoedas a um usuario, usando o template \n *z.pagar @user (quantidade)* 

**z.money** \n Verifica quantas ZoraMoedas a **PESSOA** mencionada tem

`)
.setFooter('Os {} são argumentos! Não utilize os no comando!')

 message.channel.send(embed)
}
