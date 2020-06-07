const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  let user = message.author;

  let timeout = 18000;
  let amount = args[0];

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setDescription(`❌ | You've already begged recently\n\nBeg again in ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`❌ | Specify an amount to deposit`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)


    let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#00FF00")
  .setDescription(`✅ | You've begged and received ${amount} coins`);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())


  }
};


module.exports.help = {
  name:"beg",
  aliases: [""]
}
