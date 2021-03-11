const { MessageEmbed } = require("discord.js")
const moment = require("moment")
moment.locale("pt-br")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {


    let user;

    if (!args[0]) {
      user = message.member;
    } else {


      if (isNaN(args[0])) return message.channel.send(":x: opa opa opa, não detecto menções, desculpe :cry:")


     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    }

    if (!user) {
      return message.channel.send(":x: Não consegui encontrar esse usuario.")
    }

    let embed = new MessageEmbed()
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))

    //ACTIVITY
    let array = []
    if (user.user.presence.activities.length) {

      let data = user.user.presence.activities;

      for (let i = 0; i < data.length; i++) {
        let name = data[i].name || "None"
        let xname = data[i].details || "None"
        let zname = data[i].state || "None"
        let type = data[i].type

        array.push(`**${type}** : \`${name} : ${xname} : ${zname}\``)

        if (data[i].name === "Spotify") {
          embed.setThumbnail(`https://i.scdn.co/image/${data[i].assets.largeImage.replace("spotify:", "")}`)
        }

        embed.setDescription(array.join("\n"))

      }
    }

      //EMBED COLOR BASED ON member
      embed.setColor(user.displayHexColor === "#000000" ? "#ffffff" : user.displayHexColor)

      //OTHER STUFF 
      embed.setAuthor(user.user.tag, user.user.displayAvatarURL({ dynamic: true }))

      //CHECK IF USER HAVE NICKNAME
      if (user.nickname !== null) embed.addField("Nome", user.nickname)
      embed.addField("Conta Criada em:", moment(user.user.createdAt).format("LLLL"))
.addField("Entrou Aqui Em:",moment(user.joinedAt).format("LLLL"))
        .addField("Informações",`**ID**: \`${user.user.id}\`\n**Tag**: \`${user.user.discriminator}\``)

      return message.channel.send(embed).catch(err => {
        return message.channel.send("Erro : " + err)
      })


   }
}