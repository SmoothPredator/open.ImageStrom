const {AkairoClient, CommandHandler, ListenerHandler,} = require("discord-akairo");
const {MessageEmbed} = require("discord.js");
const path = require('path');
require("dotenv").config();

globalThis.chalk = require('chalk')
globalThis.Color = '#00BFFF'
globalThis.errorColor = '#7FFFD4'

class ImageStorm extends AkairoClient {
    constructor() {
        super(
            {
                ws: {properties: {$browser: 'Discord iOS'}},
                ownerID: process.env.OWNER_ID,
                disableMentions: 'everyone',
            }
        );
        this.commandHandler = new CommandHandler(this, {
            allowMention: true,
            blockBots: true,
            prefix: '>',
            defaultCooldown: 1200,
            blockClient: true,

            directory: path.join(__dirname, 'commands')
        })
        this.listenerHandler = new ListenerHandler(this, {
            directory: path.join(__dirname, 'listeners')
        })
        this.commandHandler.useListenerHandler(this.listenerHandler)
        this.listenerHandler.loadAll()
        this.commandHandler.loadAll()
    }

}

const ImageStormClient = new ImageStorm()
ImageStormClient.on('guildCreate', guild => {
    try {
        let firstEmbed = new MessageEmbed()
            .setColor(Color)
            .setTitle(`Thanks for adding me, ${guild.owner.user.tag}\nMy prefix is [>]`)
            .addFields([
                {name:'- What can you do useless bot?',value:'- My main task is entertain people'},
                {name:`- Really!? It's all?`,value: '- Temporally,yes. But my developer will be upgrading me!'}
            ])
            .setDescription(`If you are JS developer,I'd be grateful if you help me.\nGitHub repository - [ImageStorm](https://github.com/SmoothPredator/open.ImageStrom)`)
            .setFooter('Bot developed by mągnolϊa#4320','https://images-ext-1.discordapp.net/external/5Bzyb5-W3qpEIm76SUouvdD-en1glcB2Ih2L1xlUeTQ/https/cdn.discordapp.com/avatars/226622016986415104/9bd6e40e6978b66eb0d532837720135b.webp')
        guild.owner.send(firstEmbed)
    }catch (e) {
        console.error(e)
    }

})
ImageStormClient.login(process.env.IMAGE_TOKEN)