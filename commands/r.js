const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {

if (!args[0])
return message.channel.send(`Hey <@${message.author.id}>!`, );
            const commandName = args[0].toLowerCase();
            const command = message.client.commands.has(commandName)
            || message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

            if (!command) return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
        
            delete require.cache[require.resolve(`../../commands//${command.name}`)];


            try {
                const newCommand = require(`./${command.name}.js`);
                message.client.commands.set(newCommand.name, newCommand);
                message.channel.send(`Hey <@${message.author.id}>!`, );
            } catch (error) {
                console.error(error);
                message.channel.send(`There was an error while reloading a command \`${command.name}\`:\n\`${error.message}\``);
            }
}