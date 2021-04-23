const db = require("quick.db");
exports.run = async(client, message, args) => {
 if(!['803363145921462272', '583408510184718336', '674656385656422411'].includes(message.author.id)) return;

    let user = message.mentions.users.first() || client.users.cache.get(args[0])
    if(!user) return message.channel.send(`cd o usuario? nn sei`);
  
    let fetched = db.get(`blacklist_${user.id}`)
    if(!fetched) {
      return message.channel.send(`🔹 ${message.author}, esse usuario não está na blacklist`);
    }else{
      db.delete(`blacklist_${user.id}`)
      message.channel.send(`🔹 ${user}, saiu da blacklist, espero que não cometa nenhum erro na proxima vez!`)
    }
}
