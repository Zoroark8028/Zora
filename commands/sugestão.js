const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, *eu acho que você esqueceu de escrever algo*`)
} else if (content.length > 1000) {
  return message.channel.send(`${message.author.username}, Coloque uma sugestão de no maximo 1000 letras.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "806023887149465610");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("BLUE")
    .addField("Autor(a):", message.author)
    .addField("Sugestão", content)
    .setFooter("ID do Autor(a): " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a sugestão foi enviada com sucesso!`);

  const emojis = ["👍", "👎"];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}