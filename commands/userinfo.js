const { MessageEmbed } = require("discord.js")
const moment = require("moment")
moment.locale("pt-br")

module.exports = {
  name: "userinfo",
  aliases: ["whois", "user"],
  usage: "userinfo <MENTION>",
  description: "Get advance stats of given person or yourself",
  run: async (client, message, args) => {

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

    	
    
     let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
   
	const userFlags = user.flags.toArray();
        
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
      if (user.nickname !== null) embed.addField("Apelido No Server", user.nickname)
      embed.addField("Conta Criada em:", moment(user.user.createdAt).format("LLLL"))
.addField("Entrou Aqui Em:",moment(user.joinedAt).format("LLLL"))
        .addField("Informações",`**ID**: \`${user.user.id}\`\n**Tag**: \`${user.user.discriminator}\`\n**Badges**${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'Nenhuma'}`)

      return message.channel.send(embed).catch(err => {
        return message.channel.send("Erro : " + err)
      })


   }
}