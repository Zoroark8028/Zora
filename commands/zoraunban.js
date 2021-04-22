const db = require("quick.db");
exports.run = async(client, message, args) => {
   if(!['803363145921462272', '583408510184718336'].includes(message.author.id)) return;

    let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author ||  message.guild.members.cache.find(user => user.user.username.toLowerCase() === args.join(" ").toLowerCase())
    if(!user) return message.channel.send(``);
    
    let fetched = db.get(`blacklist_${user.id}`)
    
    if(!fetched) {
       db.delete(`blacklist_${user.id}`)
      message.channel.send(`${user} saiu da blacklist, não quebre as regras dessa vez!`);
    }else{ 
      return message.channel.send(`esse usuario não está na blacklist`);
    }
}