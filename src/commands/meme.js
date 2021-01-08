const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");

class meme extends Command {
    constructor() {
        super('meme', {
            aliases: ['meme'],
            cooldown: 1500,
        });
    }

    exec(message) {
        fetch('https://apis.duncte123.me/meme')
            .then(response => response.json())
            .then(memeData => {
                if (memeData.success) {
                    let memeEmbed = new MessageEmbed()
                    memeEmbed.setURL(memeData.data.url)
                    memeEmbed.setImage(memeData.data.image);
                    memeEmbed.setColor(Color)
                    message.channel.send(memeEmbed)
                } else {
                    message.channel.send(new MessageEmbed({title: '>>>Something went wrong<<<', color: errorColor}))
                }
            })

    }
}

module.exports = meme;




