const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");

class Help extends Command {
    constructor() {
        super('help', {
            aliases: ['help'],
            cooldown: 5000,
        });
    }

    exec(message) {
        message.react('✅')
        let helpEmbed = new MessageEmbed()
            .setTitle('Commands')
            .addFields([
                {name: 'Ping', value: '[Usage: >ping]'},
                {name: 'Meme', value: "Returns random meme\n[Usage: >meme]"},
                {name: 'Joke', value: 'Returns random joke\n[Usage: >joke]'},
                {name: 'Invite', value: 'Creates bot invitation\n[Usage: >invite]'},
                {
                    name: 'Anime Image',
                    value: 'Returns random anime image\n[Usage: >anime >category<]\nGet anime categories [>anime help]'
                },
                {name: 'Anime Quote', value: 'Returns random anime quote\n[Usage: >animequoute || >aq]'}
            ])
            .setColor(Color)
        message.channel.send(helpEmbed).then(msg => msg.delete({timeout: 10000}))


    }
}

module.exports = Help;