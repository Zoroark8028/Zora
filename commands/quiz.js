const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Qual o Melhor Bot?",
    options: ["Zora", "Zector", "Ractor", "Zorinho"],
    correct: 1,
  },
   {
    title: "Qual o mais famoso?",
    options: ["Nelipe Feto", "Xuxa", "Enaldinho", "Loritta", "Péle"],
   correct: 5,
 }, 
    {
    title: "Qual o jogo com mais downloads no Mundo?",
    options: ["Minecraft", "Free Fire", "Subway Surfers", "Cod Mobile"],
    correct: 1,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "fun",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setFooter(
        `Responda essa mensagem com a resposta correta, você só tem 15 segundos`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`Está resposta está correta!`);
      } else {
        return message.channel.send(`Opa, você errou!`);
      }
    } catch (e) {
      return message.channel.send(`Você não respondeu!`);
    }
  },
};