const { MessageEmbed } = require("discord.js");
let questions = [

{ 
 title: "Qual a minha libraria?/",
    options: ["Python", "Dbscript", "Eris", "Discord.js", "Dbd.js"],
    correct: 4,
  },  
{
    title: "Qual o Bot mais Famoso?",
    options: ["Loritta", "Rythm", "Mee6", "Groovy", "UnbelievaBoat"],
    correct: 2,
  },  
{
    title: "Aaa razor shuri....",
    options: ["sengan", "susanoo", "ken"],
    correct: 3, 
},
{
    title: "Qual meu criador?(eza é facil)",
    options: ["zoroark#0000", "zoroark#0001", "zoroark#8028", "Zoroark#4564", "Zoroark#8028"],
    correct: 5,

},
   {
    title: "Qual o mais famoso?",
    options: ["Nelipe Feto", "Enaldinho", "Loritta", "Pelé"],
   correct: 4,
 }, 
    {
    title: "Qual o jogo com mais downloads no Mundo?",
    options: ["Minecraft", "Free Fire", "Subway Surfers", "Cod Mobile"],
    correct: 1,
  },

{
    title: "Se eu pudesse escolher um bolo, qual seria?",
    options: ["Eu lá vou saber", "Bolo Rosa", "Bolo de Sorvete", "Bolo de chocolate"],
    correct: 2,
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
      .setColor(`BLUE`)
      .setFooter(
        `Responda essa mensagem com o Número da opção correta, você só tem 15 segundos`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`:tada: ・${message.author} , Parabéns! Está resposta está correta!`);
      } else {
        return message.channel.send(`:x: ・ ${message.author} , Opa! Você errou! Use o comando novamente e tente denovo!`);
      }
    } catch (e) {
      return message.channel.send(`:timer: ・ ${message.author} , Você não respondeu!`);
    }
  },
};