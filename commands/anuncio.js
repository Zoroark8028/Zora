const Discord = require('discord.js')

exports.run = async (bot, message, argumentos, arg_texto, chat) => {
 
 if(!message.member.permissions.has("ADMINISTRATOR"))return message.channel.send("Somente ADMS podem usar este comando!")
 
 message.channel.send("Onde você quer enviar a mensagem? **mencione um canal!**").then(msg1 => {
 let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id, {max: 1})
 .on('collect', c => {
 let channel = c.mentions.channels.first()
 if(!channel) {
 
 message.channel.send("**como você não mencionou um canal, decidi cancelar o anuncio, você acha que sou palhaça é?!** :rage:")
 
 } else {
 
 message.channel.send("Qual o titulo você quer para este anúncio?").then(msg2 => {
 let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id, {max: 1})
 .on('collect', t => {
 let title = t.content
 
 
 message.channel.send("Qual a descrição deste anúncio?").then(msg3 => {
 let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id, {max: 1})
 .on('collect', d => {
 let desc = d.content
 
 let anunciar = new Discord.MessageEmbed()
 .setColor('RANDOM')
 .setTitle(title)
 .setDescription(desc)
 .setFooter("Anúncio feito pelo(a) "+message.author.username, message.author.displayAvatarURL({size: 32}))
 
 bot.channels.cache.get(channel.id).send(anunciar) 
 
 message.channel.send("**Anúncio enviado ao canal <#"+channel.id+"> com sucesso!**")
 
 })
 }) 
 })
 })
 }
 }) 
 })

}