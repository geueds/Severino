const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setPresence({ game: { name: 'GAME NAME', type: "streaming", url: "https://www.twitch.tv/directory/game/GAME"}});
});

client.on('message', function(message){

  if(message.content == '!bot TOKEN1')
  {
    let memberRole = message.member.guild.roles.find("name", "Role Name");
    message.member.addRole(memberRole);
    message.delete().catch(O_o=>{});
    message.member.send("Message which will be sent directly to the user.");
    return message.reply("message which will be sent with a `@username,` first."
    )
  }
});

client.on('message', function(message){

  if(message.content == '!bot info')
  {
    return message.reply("`BOT NAME HERE`'s a **`discord.js`** open-source bot based on `Severino` by `github.com/gabrguedes`."
    )
  }
});	

client.login(config.token);
