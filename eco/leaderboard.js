const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {
let client = bot;

if(!args[0]) return message.channel.send(":x: | Please specify the leaderboard type between `money` and `bank`");

if(args[0] == "money"){

let money = db.all().filter(data => data.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    money.length = 15;
    var finalLb = "";
    for (var i in money) {
      finalLb += `**${money.indexOf(money[i])+1}. ${client.users.get(money[i].ID.split('_')[2]) ? client.users.get(money[i].ID.split('_')[2]).username : "Unknown User"}** - ${money[i].data} :dollar:\n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard![money only]`, message.guild.iconURL({ dynamic: true }))
    .setColor("#7289da")
    .setDescription(finalLb)
    .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(embed);

} else
if(args[0] == "bank"){
let bank = db.all().filter(data => data.ID.startsWith(`bank_${message.guild.id}`)).sort((a, b) => b.data - a.data)
    bank.length = 15;
    var final = "";
    for (var it in bank) {
      final += `**${bank.indexOf(bank[it])+1}. ${client.users.get(bank[it].ID.split('_')[2]) ? client.users.get(bank[it].ID.split('_')[2]).username : "Unknown User"}** - ${bank[it].data} 💳\n`;
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(`Leaderboard![bank only]`, message.guild.iconURL({ dynamic: true }))
    .setColor("#7289da")
    .setDescription(final)
    .setFooter(client.user.tag, client.user.displayAvatarURL({ dynamic: true }))
    .setTimestamp()
    message.channel.send(embed);
}

}
module.exports.help = {
  name:"leaderboard",
  aliases: ["top", "lb"]
}
