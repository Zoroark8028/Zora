const { MessageEmbed } = require("discord.js");
const ms = require("ms");
module.exports = {
  name: "giveaway",
  description: "Create a simple giveaway",
  usage: "<time> <channel> <prize>",
  category: "fun",
  run: async (bot, message, args) => {
    
if(!message.member.permissions.has("ADMINISTRATOR"))return message.channel.send("Somente ADMS podem usar este comando!")

if (!args[0]) return message.channel.send(`Usagem Certa 
**z.sorteio {minutos/horas/dias para acabar}m/h/m {canal onde será realizado o sorteio} {premio}**!`);
    if (
      !args[0].endsWith("d") &&
      !args[0].endsWith("h") &&
      !args[0].endsWith("m")
    )
      return message.channel.send(
        `Usagem Correta:
        **z.sorteio 10m/10h/10d**!`
      );
    if (isNaN(args[0][0])) return message.channel.send(`Isso não é um número`);
    let channel = message.mentions.channels.first();
    if (!channel)
      return message.channel.send(
        `Eu não achei o canal no server `
      );
    let prize = args.slice(2).join(" ");
    if (!prize) return message.channel.send(`Sem premio especificado`);
    message.channel.send(`**Sorteio criado em ${channel}**`);
    let Embed = new MessageEmbed()
      .setTitle(`Novo Sorteio!`)
      .setDescription(
        `Novo Sorteio! com o premio: **${prize}**
**Para participar clique no emoji abaixo e aguarde o resultado**`  
        
      )
      .setFooter(`Resultado:`) 
.setTimestamp(Date.now() + ms(args[0]))
      .setColor(`BLUE`);
    let m = await channel.send(Embed);
    m.react("🎉");
    setTimeout(() => {
      if (m.reactions.cache.get("🎉").count <= 1) {
        message.channel.send(`Reação: ${m.reactions.cache.get("🎉").count}`);
        return message.channel.send(
          `Sem pessoas o suficiente para haver um vencedor.`
        ); 
      }

      let winner = m.reactions.cache
        .get("🎉")
        .users.cache.filter((u) => !u.bot)
        .random();
      channel.send(
        `E o vencedor do premio: **${prize}** é o... ${winner}!`
      ); 
    }, ms(args[0]));
  },
};