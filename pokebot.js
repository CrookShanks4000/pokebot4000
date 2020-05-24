const Discord = require('discord.js');
var fs = require('fs');
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
var rawUserList = fs.readFileSync('userlist.json');
var regUserArray = JSON.parse(rawUserList);
console.log("Users: " + regUserArray);
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
        fs.writeFile('userlist.json', jsonUsers, function (err) {
            if (err) throw err;
            console.log("list saved");
        });
    }
    if (message.content === helpCommand) {
        //list commands
    }
});
