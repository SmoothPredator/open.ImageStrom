const {Listener} = require("discord-akairo");

class ready extends Listener {
    constructor() {
        super('ready', {
            event: 'ready',
            emitter: 'client'
        });
    }

    exec() {
        console.info(chalk.green(`Client is ready for working!\nStarted at ${new Date()}`))
        this.client.user.setActivity({
            name: '>help',
            type: 'WATCHING'
        })


    }
}

module.exports = ready;