const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Informações sobre a Zora Natasha!")
 .setDescription(`
 Oie, sou um simples bot brasileiro, que estou tentando mudar o discord deixando os servidores mais vivos!

Prefixo: **z.**

Programada em **Discord.js**

Criador: **Zoroark#8028**

Hospedada na [Glitch](https://glitch.com)

Comando de ajuda: **z.help**`)

message.channel.send(embed)

 }