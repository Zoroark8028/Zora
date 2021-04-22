const db = require("quick.db");
exports.run = async(client, message, args) => {
         if (message.member.roles.cache.find(r => r.id === '821801183504629790')) {

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) 
    if(!user) return message.channel.send(`cd o usuario? nn sei`);
    
    let fetched = db.get(`blacklist_${user.id}`)
    
    if(!fetched) {
      db.set(`blacklist_${user.id}`, true)
      message.channel.send(`🔹 ${user} entrou na **blacklist**, ninguem mandou quebrar as regras, seu boboca!`);
    }else{ 
      return message.channel.send(`🔹 ${message.author}, esse usuario já está na blacklist.`);
    }
}
}