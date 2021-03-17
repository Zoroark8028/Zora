const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Hey, Me Adicione Em Seu Servidor!")
.setDescription(`<:hihihi:763836612114513930> **|** **Que tal me ajudar a ficar famosa?** (e entreter mais servidores,é claro!) 
me ajude me adicionando ao seu servidor!

<:lanchando:760219665933795409> **|** [Clique aqui](https://discord.com/api/oauth2/authorize?client_id=803373957738528778&permissions=2048&scope=bot) Para me adicionar em seu servidor! `)

message.channel.send(embed)

}