const Discord = require('discord-js')

if (message.content.toLowerCase().includes("z.roll 100")) {
    var response = [Math.floor(Math.random() * ((100 - 1) + 1) + 1)];

   message.channel.send("Você rolou o dado e conseguiu..." + response + "!").then().catch(console.error);  // "You got... 96!"
}