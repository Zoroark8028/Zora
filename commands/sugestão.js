const Discord = require("discord.js");

exports.run = async (client, message, args) => {
message.delete();
const content = args.join(" ");

if (!args[0]) {
  return message.channel.send(`${message.author.username}, escreva a sugestão após o comando`)
} else if (content.length > 600) {
  return message.channel.send(`${message.author.username}, Coloque uma sugestão de no maximo 600 letras.`);
} else {
  var canal = message.guild.channels.cache.find(ch => ch.id === "699780010235527278");
  const msg = await canal.send(
    new Discord.MessageEmbed()
    .setColor("blue")
    .addField("Autor:", message.author)
    .addField("Conteúdo", content)
    .setFooter("ID do Autor: " + message.author.id)
    .setTimestamp()
  );
  await message.channel.send(`${message.author} a sugestão foi enviada com sucesso!`);

  const emojis = ["👍", ""];

  for (const i in emojis) {
    await msg.react(emojis[i])
  }
}
}