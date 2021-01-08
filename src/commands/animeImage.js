const {Command} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const fetch = require("node-fetch");

class animeImage extends Command {
    constructor() {
        super("animeImg", {
            aliases: ["anime"],
            args: [
                {
                    id: "category",
                    type: "restContent",
                    default: "neko",
                    limit: 1,
                },
            ],
        });
    }

    exec(message, {category}) {
        if (category === 'help') {
            message.channel.send(new MessageEmbed({
                title: 'Available categories',
                color: Color,
                description: '**neko\nkitsune\nhug\npat\nwaifu\ncry\nkiss\nslap\nsmug\npunch\nnekolewd**',
            }))
            return;
        }
        try {
            fetch(`https://neko-love.xyz/api/v1/${category}`)
                .then((res) => res.json())
                .then((data) => {
                    if (data.code === 404) {
                        return message.channel.send(new MessageEmbed({
                            color: errorColor,
                            title: 'Nothing found',
                            description: '**Provided invalid category**'
                        }))
                    }
                    let animeEmbed = new MessageEmbed();
                    animeEmbed.setTitle(`Found ${category} category`);
                    animeEmbed.setColor(Color);
                    animeEmbed.setImage(`${data.url}`);
                    animeEmbed.setURL("https://neko-love.xyz");
                    animeEmbed.setFooter(
                        "Powered by Neko-Love",
                        "https://gblobscdn.gitbook.com/spaces%2F-LexQPn6OY1Zpr9QZtin%2Favatar-1584198071711.png?alt=media"
                    );
                    message.channel.send(animeEmbed);

                });
        } catch (error) {
            console.warn(error);
            message.reply("Something went wrong,did you entered correct category?");
        }
    }
}

module.exports = animeImage;
