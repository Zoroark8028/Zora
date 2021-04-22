const util = require('minecraft-server-util');
const Discord = require('discord.js');
const client = new Discord.Client();

// IMPORTANT: You need to run "npm i minecraft-server-util@^3.4.2 discord.js@^12.5.1" (without quotes) in your terminal before executing this script

const SERVER_ADDRESS = '0.0.0.0'; // Put your minecraft server IP or hostname here (e.g. '192.168.0.1')
const SERVER_PORT = 25565; // Put your minecraft server port here (25565 is the default)

const STATUS_COMMAND = '.status'; // Command to trigger server status message
const STATUS_ERROR = 'erro obtendo informações sobre o server'; // Check your terminal when you see this
const STATUS_ONLINE = '**Minecraft** server está **online**  -  ';
const STATUS_PLAYERS = '**{online}** pessoas estão jogando!'; // {online} will show player count
const STATUS_EMPTY = '**ninguem está jogando**';

const IP_COMMAND = '.ip'; // Command to trigger server address message
const IP_RESPONSE = 'o ip desse server é `{address}:{port}`'; // {address} and {port} will show server ip and port from above

// Do not edit below this line unless you know what you're doing

const cacheTime = 15 * 1000; // 15 sec cache time
let data, lastUpdated = 0;

client.on('message', message => { // Listen for messages and trigger commands
    if(message.content.trim() == STATUS_COMMAND) {
        statusCommand(message);
    } else if(message.content.trim() == IP_COMMAND) {
        ipCommand(message);
    }
});

function statusCommand(message) { // Handle status command
    getStatus().then(data => {
        let status = STATUS_ONLINE;
        status += data.onlinePlayers ? 
            STATUS_PLAYERS.replace('{online}', data.onlinePlayers) : STATUS_EMPTY;
        message.reply(status);
    }).catch(err => {
        console.error(err);
        message.reply(STATUS_ERROR);
    })
}

function getStatus() {
    // Return cached data if not old
    if (Date.now() < lastUpdated + cacheTime) return Promise.resolve(data);
    return util.status(SERVER_ADDRESS, { port: SERVER_PORT })
        .then(res => {
            data = res;
            lastUpdated = Date.now();
            return data;
        })
}

function ipCommand(message) { // Handle IP command
    const response = IP_RESPONSE
        .replace('{address}', SERVER_ADDRESS).replace('{port}', SERVER_PORT)
    message.reply(response);
}