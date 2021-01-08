const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");

class Ping extends Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            cooldown: 3000,
            channel: "guild",
        });
    }

    exec(message) {
        let pingEmbed = new MessageEmbed();
        pingEmbed.setTitle("Ping");
        pingEmbed.setDescription(`**${this.client.ws.ping}ms**`);
        pingEmbed.setColor(Color);
        message.reply(pingEmbed);
    }
}

module.exports = Ping;
