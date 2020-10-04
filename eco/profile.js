const Discord = require("discord.js");
const { resolve, join } = require("path");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {

  let user = message.mentions.users.first() || message.author;

  let money = db.get(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = db.get(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vip = db.get(`bronze_${message.guild.id}_${user.id}`)
    if(vip === null) vip = 'None'
    if(vip === true) vip = 'Bronze'

  let shoes = db.get(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = db.get(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = db.get(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFF500")
  .setThumbnail(user.displayAvatarURL())
  .setDescription(`**${user}'s Profile**\n\nPocket: ${money}\nBank: ${bank}\nVIP Rank: ${vip}\n\n**Inventory**\n\nNikes: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}`);
  message.channel.send(moneyEmbed)
};

module.exports.help = {
  name:"profile",
  aliases: ["pro"]
}
