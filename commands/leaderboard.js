const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (client, message, args) => {

var money = await db.all(`zm_${message.guild.id}`, { sort: ".data" });
    
let resp = "";
for (let i = 0; i < money.length; i++) {
    let user = client.users.cache.get(money[i].ID.split("_")[1]);
    resp += `${i + 1}. ${user} - ${money[i].data}$\n`;
}
    
 const embed = new Discord.MessageEmbed()
.setTitle("Informações")
.setDescription(`resp

`)
message.channel.send(embed)
}