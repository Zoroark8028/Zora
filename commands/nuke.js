const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes a given channel",
    run: async(client, message, args) => {
     if(!message.member.permissions.has("ADMINISTRATOR"))return message.channel.send(`Somente pessoas com a permissão \`Administrador\` podem usar este comando!`)
      let reason = args.join(" ") || "motivo não definido"
        if(!message.channel.deletable) {
            return message.reply("Esse canal não pode ser deletado!")
            return message.channel.send(`🔹 ${message.author}, Esse canal não pode ser deletado, talvez por que eu não tenho permissão.`)
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Canal Recriado!")
        .setColor('BLUE')
        .setDescription(`**Motivo:** \`${reason}\``)
        .setFooter(`Moderador(a): ${message.author.tag}`, message.author.displayAvatarURL({format: "png"}));
        await newchannel.send(embed)
    }
}
