const Discord = require('discord.js');
const client = new Discord.Client();
const utils = require('./utils');
const fs = require('fs');
const {mapMembersToId} = require("./helpers/mapMembers")

client.once('ready', () => {
	console.log('Ready!');
});

fs.readdir('./events',(err, files)=>{
	if (err) return console.error(err);
	files.forEach(file => {
		const event = require(`./events/${file}`)
		const eventName = file.split(".")[0];
		client.on(eventName, event.bind(null, client));
	})
})

client.commands = new Discord.Collection();
client.projects = new Discord.Collection();
client.members = new Discord.Collection();
client.people = new Discord.Collection();

mapMembersToId(client)

fs.readdir('./commands', (err, files)=>{
	if (err) return console.error(err);
	files.forEach(file => {
		const command = require(`./commands/${file}`);
		client.commands.set(command.name, command);
	});
});

client.login(utils.authToken);