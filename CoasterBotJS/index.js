const { Client, Intents } = require('discord.js');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ]
});

const prefix = '!'; 

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

  if(!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if(command === 'dmall') {
    const content = args.join(' ');
    
    message.guild.members.cache.forEach(member => {
      member.send(content).catch(err => {
        console.log(`Couldn't DM ${member.user.tag}`);
      });
    });
  }

});

client.login('MTE5MDc0MTE5MDY4NjAxNTY0MA.GWQ1EH.W9Zhm3uxVHaLDINd7_kt2LYg1NAPdHi6_7GyHk');
