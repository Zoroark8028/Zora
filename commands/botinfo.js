const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Informações sobre a Zora Natasha!")
 .setDescription(`
Oie, sou um simples bot brasileiro, que tem as mesmas coisas de outros bots. 

<:lanchando:760219665933795409> Criador: **Zoroark#8028**

Prefixo: **z.**

Programada em **Discord.js**

Latencia: **${Math.round(client.ws.ping)}ms**

Hospedada na [Glitch](https://glitch.com)

Comando de ajuda: **z.ajuda**`)

message.channel.send(embed)

 }