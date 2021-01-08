const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");

class animeQuotes extends Command {
    constructor() {
        super('animeQuotes', {
            aliases: ['animequote', 'aq']
        });
    }

    exec(message, {anime}) {
        try {
            fetch(`https://animechanapi.xyz/api/quotes/random`)
                .then(response => response.json()).then(quoteData => {
                let quoteEmbed = new MessageEmbed()
                    .setTitle('Anime quote')
                    .addFields([
                        {name: 'Quote', value: `${quoteData.data[0].quote}`},
                        {name: 'Character', value: `${quoteData.data[0].character}`},
                        {name: 'From', value: `${quoteData.data[0].anime}`}
                    ])
                    .setColor(Color)

                message.channel.send(quoteEmbed)
            })
        } catch (e) {
            message.channel.send(new MessageEmbed({title: '>>>Something went wrong<<<', color: errorColor}))
        }


    }
}

module.exports = animeQuotes;