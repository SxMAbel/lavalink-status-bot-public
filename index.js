const express = require('express')
const app = express();
const host = '0.0.0.0';
const port = 3000;

app.get('/', (req, res) => res.send('⚡️🤖Bot Is Online!!🤖⚡️'))

app.listen(port, host,() =>
  console.log(`Your app is listening a http://localhost:${port,host}`)
);


const { Client, Collection, Intents, MessageEmbed } = require("discord.js");

const { readdirSync } = require("fs");
const { Manager } = require("erela.js");
const { token, nodes } = require('./config');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
    disableMentions: "everyone",
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],

});

client.manager = new Manager({
        nodes,
        send: (id, payload) => {
        const guild = client.guilds.cache.get(id);
        if (guild) guild.shard.send(payload);
    },
});

  
readdirSync("./Events/").forEach(file => {
    const event = require(`./Events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Loading Events Client ${eventName}`, "event");
    client.on(eventName, event.bind(null, client));
});

  

  client.login(token);
