const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\nBronze: 3500 Coins [<prefix>buy bronze]\n\n**Lifestyle Items**\n\nFresh Nikes: 600 [<prefix>buy nikes]\nCar: 800 [<prefix>buy car]\nMansion: 1200 [<prefix>buy mansion]")
    .setColor("#0099ff")
    message.channel.send(embed)




}


module.exports.help = {
  name:"store",
  aliases: ["st"]
}
