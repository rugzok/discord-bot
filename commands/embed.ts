import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
    category: 'Testing',
    description: 'Sends an embed',

    permissions: ['ADMINISTRATOR'],

    callback: ({ message, text }) => {
        const embed = new MessageEmbed().setDescription('embed message here')        
        return embed
    },
} as ICommand
