const express = require('express');
const app = express();
app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Ping recebido às ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT); // Recebe solicitações que o deixa online

const Discord = require("discord.js"); //Conexão com a livraria Discord.js
const client = new Discord.Client(); //Criação de um novo Client
const config = require("./config.json"); //Pegando o prefixo do bot para respostas de comandos

client.on("ready", () => {
let avatar = [
`https://cdn.glitch.com/93d6f45a-a737-47e8-8966-31894015e729%2F78801ae9-1e40-431e-b311-6c8e0b10f9ca.image.png?v=1614371274275`,  
`https://cdn.glitch.com/93d6f45a-a737-47e8-8966-31894015e729%2F8806f87f-be13-4dd9-a60a-ccf686d37348.image.png?v=1614371381738`,
`https://cdn.glitch.com/93d6f45a-a737-47e8-8966-31894015e729%2F9a79cc19-82f8-4c35-9772-2009aba4e4d1.image.png?v=1614373229732`
],
i = 0;
setInterval( () => client.user.setAvatar(`${avatar[i++ % avatar.length]}`, {
}), 5000 * 60);
 console.log(`[AVATAR MUDADO] mudei meu avatar`)
});

         
client.on("ready", () => {
    let activities = [
      `Utilize ${config.prefix}ajuda para ver meus comandos!`,
      `Videos Do PauloCraft!`,
      `Caçando bot do Dogão no Brawl Stars!`,
      `"Dirigindo a ZoraFiat do canal ZoraStars"!` 
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
     if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;

    const args = message.content
        .trim().slice(config.prefix.length)
        .split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        const commandFile = require(`./commands/${command}.js`)
        commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err);
  }
});

client.login(process.env.TOKEN); //Ligando o Bot caso ele consiga acessar o token
console.log(`[CONECTADA] Zora Natasha#4439 foi conectada com sucesso ao Discord.`)  

client.on('message', (message) => {
  if (message.content.includes('<@!803373957738528778>')) {
    message.reply(`a`)
    return
  };
});