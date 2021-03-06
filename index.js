const express = require('express');
const app = express();
app.get('/', function (req, res) {
  res.send("Parabéns, você ligou a zora!")
})
app.listen(3000)

const Discord = require("discord.js"); 
const client = new Discord.Client(); 
const config = require("./config.json"); 
const fs = require("fs")
const db = require("quick.db")
const bot = new Discord.Client();    

client.on("guildMemberAdd", async (member) => { 

  let guild = await client.guilds.cache.get("821563484617572352");
  let channel = await client.channels.cache.get("821563484617572355")
  if (guild != member.guild) {
    return console.log("boas vindas!");
   } else {
channel.send(`**${member.user}** entrou no **Quartel da Zora**, vamos bater um papo com ele? Mas antes, não esqueça de **ler as regras!**`);
  }
});

client.on("ready", () => {
    let activities = [
      `Utilize ${config.prefix}ajuda para ver meus comandos!`,
      `Videos Do PauloCraft!`,
      `Caçando bot da Belle Delphine no Brawl Stars!`,
      `"Joguei brawl stars no pc (deu ruim)"!`,
`Me faça perguntas usando ${config.prefix}zora!` 
    ],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "WATCHING"
      }), 1000 * 60); 
  client.user
      .setStatus("online")
      });                               

client.on('message', message => {
     if (message.author.bot) return;
     if (message.channel.type == 'dm') return;
     if (!message.content.toLowerCase().startsWith(config.prefix.toLowerCase())) return;
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return
  
let user = db.get(`blacklist_${message.author.id}`);
  if(user == true) return;

  const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
console.error('Erro: ' + err);
     }
});
        
  client.on('message', message => {
    if (message.content === '<@!803373957738528778>') {
        message.channel.send(':zap: ・ Oie, meu prefixo é **z.** , se precisar de qualquer ajuda, utilize **z.ajuda**');
    }
});

client.on('message', message => {
    if (message.content === '<@803373957738528778>') {
        message.channel.send(':zap: ・ Oie, meu prefixo é **z.** , se precisar de qualquer ajuda, utilize **z.ajuda**');
    }
});

client.login(process.env.TOKEN); 
console.log(`[CONECTADA] Zora Natasha#4439 foi conectada com sucesso ao Discord.`)  