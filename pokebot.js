const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOT_TOKEN);
client.on('ready', () => {
  console.log('I am ready!');
});
//create instance, logs in, reports ready

var pokeCommand = process.env.pokeCommand;
var trainerCommand = process.env.trainerCommand;
var headToHead = process.env.headtoHeadCommand;
var helpCommand = process.env.helpCommand;
//link environmental variable(s)

client.on('message', message => {
    if (message.content === pokeCommand) {
        //random wild pokemon
        var currentServer = message.guild;
        message.reply(currentServer);
}
    if (message.content === helpCommand) {
        //list commands
    }

);