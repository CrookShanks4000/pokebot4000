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
var regCommand = process.env.regCommand;
//link envs
var dummy = "dummy";
var regUserArray = [dummy];
var userArray;
//declare variables

client.on('message', message => {
    if (message.content === regCommand) {
        //register new user
        var rawUserTag = message.author.tag;
        currentUserTag = rawUserTag.replace("#", "ID");
        function checkIfNew(user) {
            return user === currentUserTag;
        }
        var newUser = regUserArray.find(checkIfNew);
        if (newUser == currentUserTag) {
            message.reply("You are already registered!");
            console.log(currentUserTag + ' is already registered');
        } else {
            eval('var ' + currentUserTag + ' = "' + message.author.username + '";');
            eval('regUserArray.push(' + currentUserTag + ');');
            console.log('Successfully registered ' + currentUserTag);
            message.reply("You were successfully registered!");
        }    
        console.log(regUserArray.toString());
        jsonUsers = JSON.stringify(regUserArray);
        localStorage.setItem("Usernames", jsonUsers);
    }
    if (message.content === helpCommand) {
        //list commands
    }
});
