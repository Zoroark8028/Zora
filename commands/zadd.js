const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {



   if(!['803363145921462272', '601473350619103235', '674656385656422411'].includes(message.author.id)) return;

    if (!args[0]) return message.reply('teste')
    if (isNaN(args[0])) return message.reply('preguiça')

    let user = message.mentions.users.first() || message.author
    message.channel.send(`Succeso adicionado ' + args[0] Zoramoedas + ' para ' + user`)
    db.add(`money_${message.guild.id}_${message.author.id}`, args[0])

}