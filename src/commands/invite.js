const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");

class invite extends Command {
    constructor() {
        super('invite', {
            aliases: ['invite', 'inv'],
            cooldown: 5000,
        });
    }

    exec(message) {
        this.client.generateInvite("ADMINISTRATOR")
            .then(inv => message.channel.send(new MessageEmbed({title: 'Thank you❤️', url: inv, color: '#FFB6C1'})))
    }
}

module.exports = invite;