const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args) => {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send({ 
embed:{ 
title: "only Admin parmission user use this Command.", 
color: 0xff0000
}});
  let user = message.mentions.users.first() || message.author;

    if (isNaN(args[0])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[0])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`✅ | Added ${args[0]} coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};

module.exports.help = {
  name:"add",
  aliases: ["am"]
}
