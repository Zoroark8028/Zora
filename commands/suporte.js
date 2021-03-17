const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

 const embed = new Discord.MessageEmbed()
 .setColor("BLUE")
 .setTitle("Server De Suporte ")
.setDescription(`
🔷 **|** Quer ver meu server de suporte 
para suas duvidas/sugestões/etc? 

[Clique Aqui](https://discord.gg/epUJV7b45X) **para entrar em meu servidor!**`)

message.channel.send(embed)

}