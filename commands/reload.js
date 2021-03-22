const Discord = require("discord.js"),
  { join } = require("path"),  
    { readdirSync } = require("fs");
     

module.exports = {
	help: {
		name: "reload",
    		description: "Reload's a command",
    		aliases: ["r"],
	    	},

run: async (client, message, args) => {

if (!args[0]) return message.channel.send("Por favor, coloque o nome de um comando valido!");

const commandName = args[0].toLowerCase();
	
const command = client.commands.cache.get(command)
			|| client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));

if (!command) return message.channel.send("ry again.");
	
	readdirSync(join(__dirname, "..")).forEach(f => {
		const files = readdirSync(join(__dirname, "..", f));
		if (files.includes(`${commandName}.js`)) {
			const file = `../${f}/${commandName}.js`;
			try {
				delete require.cache[require.resolve(file)];
				client.commands.delete(commandName);
				const pull = require(file);
				client.commands.set(commandName, pull);
				return message.channel.send(`Successfully reloaded \`${commandName}.js\` !`);
			}
			catch (err) {
				message.channel.send(`Could not reload: \`${args[0].toUpperCase()}\` `);
				return console.log(err.stack || err);
			}
		}
	});
}};