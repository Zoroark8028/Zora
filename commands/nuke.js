const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "nuke",
    description: "Nukes a given channel",
    authorPermission: "ADMINISTRATOR",
    run: async(client, message, args) => {
        let reason = args.join(" ") || "motivo não definido"
        if(!message.channel.deletable) {
            return message.reply("Esse canal não pode ser deletado!")
        }
        let newchannel = await message.channel.clone()
        await message.channel.delete()
        let embed = new MessageEmbed()
        .setTitle("Canal Explodido")
        .setColor('BLUE')
        .setDescription(reason)
        await newchannel.send(embed)
    }
}