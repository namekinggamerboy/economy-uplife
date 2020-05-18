const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
let client = bot;

  var finalLb = "";
  db.startsWith(`money_${message.guild.id}`, { sort: '.data'}).then(resp => {
      resp.length = 15;

      let i = 0;
      for (i in resp) {
        if (resp[i] == null || resp[i] == undefined) {
          db.set(`money_${message.guild.id}_${resp[i].ID.split('_')[2]}`, 50);
        }
        finalLb += `**${client.users.get(resp[i].ID.split('_')[2]).username}** - \`$${resp[i].data}\`\n`;
      }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL())
    .setDescription(finalLb)
    .setColor(0x00ff00)

    message.channel.send(embed)
  });

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["top"]
}
