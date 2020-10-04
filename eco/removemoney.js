const Discord = require("discord.js");
const db = require("quick.db");

module.exports.run = async (bot, message, args) => {  
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply({ 
embed:{ 
title: "only Admin parmission user use this Command.", 
color: 0xff0000
}});

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[0])) return;
    db.subtract(`money_${message.guild.id}_${user.id}`, args[0])
    let bal = db.get(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#00FF00")
    .setDescription(`💸 | Removed **${args[0]}** coins\n\nNew Balance: ${bal}`);
    message.channel.send(moneyEmbed)

};


module.exports.help = {
  name:"removemoney",
  aliases: ["rm"]
}
