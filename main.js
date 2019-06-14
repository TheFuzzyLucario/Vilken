const Discord = require('discord.js');
const client = new Discord.Client();
const {version, prefix, token} = require('./config.json');

client.login(token);
client.once('ready', () => {
  console.log(`Vilken v${version} has logged in successfully.`);
});
