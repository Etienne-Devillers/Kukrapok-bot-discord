import axios from 'axios'
import { MessageEmbed } from 'discord.js';
import { ICommand } from "wokcommands";

export default {
    category: 'Api request',
    description: 'Donne le Rio d\'un personnage',
    expectedArgs: '<nomDuPersonnage> <nomDuServeur>',
    minArgs: 2,
    maxArgs: 2,

    slash: true,
    testOnly: true,



    callback: async ({ args }) => {
        const serverName = encodeURI(args[1])
        let uri = `https://raider.io/api/v1/characters/profile?region=eu&realm=${serverName}&name=${args[0]}&fields=mythic_plus_scores`
        const { data } = await axios.get(uri)
        var color1 = 255
        var color2 = 255
        var color3 = 255
        switch (data.class) {
            case 'Death Knight':
                color1 = 196
                color2 = 30
                color3 = 58
                break;
            case 'Demon Hunter':
                color1 = 163
                color2 = 48
                color3 = 201
                break;
            case 'Druid':
                color1 = 255
                color2 = 124
                color3 = 10
                break;
            case 'Hunter':
                color1 = 170
                color2 = 211
                color3 = 114
                break;
            case 'Mage':
                color1 = 63
                color2 = 199
                color3 = 235
                break;
            case 'Monk':
                color1 = 0
                color2 = 255
                color3 = 152
                break;
            case 'Paladin':
                color1 = 244
                color2 = 140
                color3 = 186
                break;
            case 'Priest':
                color1 = 255
                color2 = 255
                color3 = 255
                break;
            case 'Rogue':
                color1 = 255
                color2 = 244
                color3 = 104
                break;
            case 'Shaman':
                color1 = 0
                color2 = 112
                color3 = 221
                break;
            case 'Warlock':
                color1 = 135
                color2 = 136
                color3 = 238
                break;
            case 'Warrior':
                color1 = 198
                color2 = 155
                color3 = 109
                break;
        }
        const embed = new MessageEmbed()
            .setColor([color1, color2, color3])
            .setTitle(data.name)
            .setDescription('Score Raider Io de la saison')
            .setThumbnail(data.thumbnail_url)
            .addFields([
                {
                    name: 'Score Tank',
                    value: `${data.mythic_plus_scores.tank}`,
                    inline: true
                },
                {
                    name: 'Score Dps',
                    value: `${data.mythic_plus_scores.dps}`,
                    inline: true
                },
                {
                    name: 'Score Healer',
                    value: `${data.mythic_plus_scores.healer}`,
                    inline: true
                },
            ])
        return embed

    },
} as ICommand