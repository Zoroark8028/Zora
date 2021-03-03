const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Informações sobre a Zora Natasha!")
 .setDescription(`
Oie, sou um simples bot brasileiro, que tem as mesmas coisas de outros bots. 

<:lanchando:760219665933795409> Criador: **Zoroark#8028**

Para me adicionar [Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=803373957738528778&permissions=2048&scope=bot) 

Prefixo: **z.**

Programada em **Javascript**

Libraria: **Discord.js**

Latencia: **${Math.round(client.ws.ping)}ms**

Hospedada na [Glitch](https://glitch.com)

Comando de ajuda: **z.ajuda**`)

message.channel.send(embed)

 }