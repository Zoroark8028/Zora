const Discord = require('discord.j')
const fs = require('fs');

module.exports = {
	name: 'reload',
	description: 'Reloads a command',
	execute(message, args) {
		// ...
    const commandName = args[0].toLowerCase()
    const command = message.client.commands.get(commandName)
	|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
}
  }