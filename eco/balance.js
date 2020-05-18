const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.members.first() || message.author;

  let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setThumbnail(user.displayAvatarURL()+"?size=4096")
  .setDescription(`**${user}'s Balance**\n\nPocket: ${bal}\nBank: ${bank}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"balance",
  aliases: ["bal"]
}
