const db = require("quick.db");
exports.run = async(client, message, args) => {
   if(!['803363145921462272', '583408510184718336'].includes(message.author.id)) return;

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
    if(!user) return message.channel.send(``);
    
    let fetched = db.get(`blacklist_${user.id}`)
    
    if(!fetched) {
      db.set(`blacklist_${user.id}`, true)
      message.channel.send(`🔹 ${user} entrou na **blacklist**, ninguem mandou quebrar as regras, seu boboca!`);
    }else{ 
      return message.channel.send(`🔹 ${message.author}, esse usuario já está na blacklist.`);
    }
}