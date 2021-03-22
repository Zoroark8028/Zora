const db = require('quick.db');
const ms = require('parse-ms');

module.exports = {
    name: "daily",
    description: "Receive a daily award of money",

    async run (client, message, args) {
        let user = message.author;
        let timeout =  43200000;
        let amount = Math.floor(Math.random() * 300) + 20;

        let daily = await db.fetch(`daily_${message.guild.id}_${user.id}`);

        if(daily !== null && timeout - (Date.now() - daily) > 0){
            let time = ms(timeout - (Date.now() - daily));

            return message.channel.send(`<:742758255276720259:771911664172793856> **|** ${message.author}, você ja coletou seu daily de hoje, resgate denovo em: **${time.hours} horas , ${time.minutes} minutos e ${time.seconds} segundos.**`)
        } else {
            db.add(`money_${message.guild.id}_${user.id}`, amount);
            db.set(`daily_${message.guild.id}_${user.id}`, Date.now());

            message.channel.send(`<:742756936050671706:771911635924418590> **|** ${message.author}, você recebeu **${amount} ZoraMoedas** em seu daily!`)
        }
    }
}