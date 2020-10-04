const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.users.first() || message.author;

  let bal = db.get(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = db.get(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFD300")
  .setThumbnail(user.displayAvatarURL()+"?size=4096")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}\nTotal Balance:${bal+bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}
