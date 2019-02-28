const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./fruitbotauth.json');
const earrape = client.createVoiceBroadcast();
var special = false;
var playing = false;
var emojis = ["🥝","🍎","🍓","🍉","🍍","🍐","🍌","🍊","🍈","🍇","🍒","🍑"];


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async msg => {
	if (!msg.content.startsWith(auth.prefix) || msg.author.bot){
		return;
	}
	const args = msg.content.slice(auth.prefix.length).split(' ');
	const cmd = args.shift().toLowerCase();
	special = false;
	if(msg.author.id === ("133028518513737728")){
		special = true;
		if((Math.floor(Math.random() * 5) === 1)){
			msg.react("🥑");
		}
	}
	if(msg.author.id === ("197507885461143553")){
		special = true;
		if((Math.floor(Math.random() * 5) === 1)){
			msg.react("🍆");
			msg.react("💦");
			msg.react("😍");
		}
	}
	if(!special){
		if((Math.floor(Math.random() * 3) === 1)){
			var emoji = emojis[Math.floor(Math.random()*emojis.length)];
			msg.react(emoji);
		}
	}

	if(msg.content === (auth.prefix+'help')){
		console.log("Ran help");
		msg.channel.send("Commands include: \nversion \ndeveloper \ntest \nrole");
	}	
	if(msg.content === (auth.prefix+'version')){
		console.log("Ran version");
		msg.channel.send("Version: "+auth.version);
	}
	if(msg.content === (auth.prefix+'test')){
		console.log("Ran test");
		msg.reply("working as planned!");
	}
	if(msg.content === (auth.prefix+'developer')){
		console.log("Ran developer");
		msg.channel.send("I am developed by Kelvin#1425.  DM him if you have any issues.");
	}
	if(msg.content.includes(auth.prefix+'role')){

		if(msg.content == (auth.prefix + 'role')){
		msg.channel.send("To add a role, do '+role @rolename'\nTo remove a role, do '+role remove @rolename'.");
		}

		else if(args[0] == 'remove'){
			askedRole = args[1];
			askedRole = askedRole.replace('<@&', '')
			askedRole = askedRole.replace('>', '')
			console.log(askedRole);
			let roleToRemove = msg.mentions.roles.first();
			msg.member.removeRole(askedRole).catch(console.error);
		}
		else{
			askedRole = args[0];
			askedRole = askedRole.replace('<@&', '')
			askedRole = askedRole.replace('>', '')
			console.log(askedRole);
			let roleToAdd = msg.mentions.roles.first();
			msg.member.addRole(askedRole).catch(console.error);
		}	
	}
	if(msg.content.includes(auth.prefix+'rit')){

		if(msg.content == (auth.prefix + 'rit')){
		msg.channel.send("To use regional indicator text correctly, do '+rit text_here'.");
		}

		else{
		msg.delete();
		var phrase = args.slice(0).join().toLowerCase();
		var string = "";
		var i;
		console.log(phrase)
		for (i = 0; i < phrase.length; i++) { 
			if(phrase[i] == ","){
				string += "  ";
			}
			else{
 				string += ":regional_indicator_"+ phrase[i] + ":";
			}
		}
		await msg.channel.send(string);
		}
	}
});

//function giveRank(askedRole){
//	
//}
client.login(auth.token);

