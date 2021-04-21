const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "daily",
  description: "Aqui está o seu daily .username",

  async run(client, message, args) {
    let user = message.author;
    let timeout = 43200000;
    let amount = Math.floor(Math.random() * 300) + 20;

    let daily = await db.fetch(`daily_${user.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
      let time = ms(timeout - (Date.now() - daily));

      return message.channel.send(
        `🔹 ${message.author}, Seu tempo para pegar daily novamente ainda não passou, pegue seu daily daqui a \`${time.hours} horas, ${time.minutes} minutos e ${time.seconds} segundos.\``
      );
    } else {
      db.set(`money_${user.id}`, amount);
      db.add(`daily_${user.id}`, Date.now());

      message.channel.send(
        `🔹 ${message.author} você pegou seu daily, e recebeu **${amount} ZoraMoedas!**`
      );
    }
  }
};
