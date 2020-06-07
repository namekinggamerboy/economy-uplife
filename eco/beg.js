const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;
  let amount = args[0];

let embed2 = new Discord.MessageEmbed()
  .setColor("#FF0000")
  .setDescription(`❌ | Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }

let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)

if(args[0] === "all"){
let embedbank = new Discord.MessageEmbed()
    .setColor('#FF0000')
    .setDescription("❌ | You don't have any money to beg")

    if(bank === 0) return message.channel.send(embedbank)

    db.add(`money_${message.guild.id}_${user.id}`, bank)
    db.subtract(`bank_${message.guild.id}_${user.id}`, bank)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#00FF00")
  .setDescription(`✅ | You have beg all your coins into your poket`);
  message.channel.send(embed5);

} else {
    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00FF00")
  .setDescription(`✅ | You have beg your **${amount}** coins into your poket`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
 
}

 
};


module.exports.help = {
  name:"beg",
  aliases: [""]
}
