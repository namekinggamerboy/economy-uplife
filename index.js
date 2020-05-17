const Discord = require("discord.js"),
path = require("path"); 
const fs = require("fs");

module.exports = {

  version: require("./package.json").version,

  start(client, prefix){
    if(!client){
            throw new Error("No client found.");
        }
    if(!prefix) return console.log("[economy-uplife]⚠️:{please give me prefix}");
  const bot = client;
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir(__dirname+"/eco/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
   
    return;
  }
  

  jsfile.forEach((f, i) =>{
    let props = require(__dirname+`/eco/${f}`);
    bot.commands.set(props.help.name, props);
    props.help.aliases.forEach(alias => { 
      bot.aliases.set(alias, props.help.name);
  
  });
});
})
bot.on("ready", async () => {
 /* console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity(`In Development`);
  bot.user.setStatus('online');
*/
  bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let messageArray = message.content.split(" ");
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();
    let commandfile;

    if (bot.commands.has(cmd)) {
      commandfile = bot.commands.get(cmd);
  } else if (bot.aliases.has(cmd)) {
    commandfile = bot.commands.get(bot.aliases.get(cmd));
  }
  
      if (!message.content.startsWith(prefix)) return;

          
  try {
    commandfile.run(bot, message, args);
  
  } catch (e) {
  }}
  )})
}

}
