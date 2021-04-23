module.exports.run = async (client, message, args) => {
  const m = await message.channel.send('Ping...');

  m.edit(`🏓 **| Pong!**\n:yo_yo: **|** Latência do Server: **${m.createdTimestamp -
      message.createdTimestamp}ms.**\n:tickets: **|** Latência da API: **${Math.round(
      client.ws.ping
    )}ms**`
  );
};
