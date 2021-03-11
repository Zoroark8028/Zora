const { MessageEmbed } = require('discord.js');
const moment = require('moment');
moment.locale('pt-br')

const regions = {
	brazil: 'Brasil',
	europe: 'Europe',
	hongkong: 'Hong Kong',
	india: 'India',
	japan: 'Japan',
	russia: 'Russia',
	singapore: 'Singapore',
	southafrica: 'South Africa',
	sydeny: 'Sydeny',
	'us-central': 'US Central',
	'us-east': 'US East',
	'us-west': 'US West',
	'us-south': 'US South'
};

const verificationLevels = {
	NONE: 'Nenhum',
	LOW: 'Baixo',
	MEDIUM: 'Médio',
	HIGH: '(╯°□°）╯︵ ┻━┻',
	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'
};

module.exports = {
    name: "serverinfo",
    category: "info",
    aliases: ["server", "guild", "guildinfo"],
    description: "Pegar informações do servidor",
    run: async (client, message, args) => {
		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
		const members = message.guild.members.cache;
		const channels = message.guild.channels.cache;
		const emojis = message.guild.emojis.cache;
      
      const embed = new MessageEmbed()
			.setDescription(`**Informação Do Servidor __${message.guild.name}__**`)
			.setColor('BLUE')
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField('Geral', [
				`**Nome:** ${message.guild.name}`,
				`**ID:** ${message.guild.id}`,
					`**Região Do Servidor:** ${regions[message.guild.region]}`,
				`**Nível de impulso:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
				`**Nível de verificação:** ${verificationLevels[message.guild.verificationLevel]}`,
				`⌛ **Tempo criado:** ${moment(message.guild.createdTimestamp).format('LL')}, ${moment(message.guild.createdTimestamp).fromNow()}`,
				'\u200b'
        ])
			
      .addField('Estatisticas', [
        `☕┃**Canais de texto:** ${channels.filter(channel => channel.type === 'text').size}`,
				`📢┃**Canais de voz:** ${channels.filter(channel => channel.type === 'voice').size}`,
				`🚀┃**Contagem de impulso:** ${message.guild.premiumSubscriptionCount || '0'}`,
				'\u200b'
        ])
      .addField('Membros', [
				`**Online:** ${members.filter(member => member.presence.status === 'online').size}`,
				`**Ausente:** ${members.filter(member => member.presence.status === 'idle').size}`,
				`**Não perturbe:** ${members.filter(member => member.presence.status === 'dnd').size}`,
				`**Offline:** ${members.filter(member => member.presence.status === 'offline').size}`,
				'\u200b'
			])
			.setTimestamp();
		message.channel.send(embed);
	}

};
      