const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("#ff0000")
 .setTitle("Informações sobre a Zora Natasha!")
 .setDescription(`
🔹 **|** Oie, sou uma simples bot brasileira, que tem o objetivo divertir servidores do **Discord**, ajudar membros com tarefas comuns;

🔹 **|** Deixar seu server mais **divertido**, se quiser comunicar com meu criador, ele sempre vai estar interagindo, conversando no **server de suporte**\`(mesmo que esteja bem morto)\` <:cat_toes:830563413033877514>

<:hihihi:763836612114513930> **|** Prefixo: **z.**

<:lanchando:760219665933795409> **|** Criador: **Zoroark#8028**

:gem: **|** Server de Suporte: [Clique Aqui](https://discord.gg/epUJV7b45X)

<:mamaco:823080106619568140> **|** Para me adicionar [Clique Aqui](https://discord.com/api/oauth2/authorize?client_id=803373957738528778&permissions=2048&scope=bot) 

:books: **|** Libraria: **Discord.js**

☪️ **|** Hospedada na [Glitch](https://glitch.com)

`)

message.channel.send(embed)

 }