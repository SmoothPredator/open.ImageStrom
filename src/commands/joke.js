const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");

class joke extends Command {
    constructor() {
        super('joke', {
            aliases: ['joke', 'jk'],
            cooldown: 1500,
        });
    }

    exec(message) {
        fetch('https://apis.duncte123.me/joke').then(response => response.json()).then(jokeData => {
            if (jokeData.success) {
                let jokeEmbed = new MessageEmbed()
                jokeEmbed.setTitle('Joke')
                jokeEmbed.setDescription(`${jokeData.data.title}\n${jokeData.data.body}`)
                jokeEmbed.setColor(Color)
                jokeEmbed.setURL(jokeData.data.url)
                message.channel.send(jokeEmbed)
            } else {
                message.channel.send(new MessageEmbed({title: '>>>Something went wrong<<<', color: errorColor}))
            }
        })

    }
}

module.exports = joke;