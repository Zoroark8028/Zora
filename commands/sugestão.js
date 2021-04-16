const Discord = require("discord.js");

exports.run = async (client, message, args) => {

const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author}, *eu acho que você esqueceu de escrever algo*`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author}, Coloque uma sugestão de no maximo 1000 letras.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "821849042060836904");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField("Autor(a):", message.author,
              ${message.author.id}`)
    .addField("Sugestão", content)
    .setFooter("Será que essa sugestão vale a pena?")
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a sugestão foi enviada com sucesso!`);

  const emojis = ["👍", "👎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}