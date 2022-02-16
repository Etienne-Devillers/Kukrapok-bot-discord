import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
import dotenv from "dotenv"
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready', () => {
    console.log("Bot Ready")

    new WOKCommands(client, {
        commandDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '812683009748238346',
    })

    const guildId ='812683009748238346'
    const guild = client.guilds.cache.get(guildId)
    let commands

    if (guild) {
        commands = guild.commands
    } else {
        commands = client.application?.commands
    }

    commands?.create({
        name : 'bonjour',
        description: 'vous répond bonjour.',
    })
})

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) {
        return
    }
})


client.on('messageCreate', (message) => {
    if (message.content === 'Quel bruit fait Kukrapok ?'){
        message.reply({
            content:'Koutchikou... koutchikou',
        })
    }
})

client.on('messageCreate', (message) => {
    if (message.content === 'Qui est la jambe de Kukrapok ?'){
        message.reply({
            content:'Patrick Duffy de la télévision',
        })
    }
})


client.login(process.env.TOKEN)