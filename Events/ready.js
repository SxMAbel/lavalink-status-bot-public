const { MessageEmbed } = require("discord.js");
const config = require("../config")
module.exports = async (client) => {

    const channel = await client.channels.fetch(config.channel)
    const embed = new MessageEmbed()
    .setColor("#2F3136")
    .setDescription("Please wait for a minute!\nStatus is getting ready!")
    channel.bulkDelete(10);
    channel.send({embeds: [embed]}).then((msg) => {
   setInterval(() =>{
     
            let all = []
            
            client.manager.nodes.forEach(node => {
              let info = []
              info.push(`Status: ${node.connected ? "🟢" : "🔴"}`)
              info.push(`Node: ${(node.options.identifier)}`)
              info.push(`Player: ${node.stats.players}`)
              info.push(`Playing Players: ${node.stats.playingPlayers}`)
              info.push(`Uptime: ${new Date(node.stats.uptime).toISOString().slice(11, 19)}`)
              info.push("\nCPU")
              info.push(`Cores: ${node.stats.cpu.cores}`)
              info.push(`System Load: ${(Math.round(node.stats.cpu.systemLoad * 100) / 100).toFixed(2)}%`)
              info.push(`Lavalink Load: ${(Math.round(node.stats.cpu.lavalinkLoad * 100) / 100).toFixed(2)}%`)
              all.push(info.join('\n'))
            });
        const rembed = new MessageEmbed()
            .setTitle('Lavalink Node')
            .setThumbnail('https://media.discordapp.net/attachments/923958030129848340/923962086915194880/IMG_0902.jpg')
					  
            .setDescription(`\`\`\`${all.join('\n\n----------------------------\n')}\n\n` + 
                    `Total Memory  :: ${Math.round(require('os').totalmem() / 1024 / 1024)} mb\n` +
                    `Free Memory   :: ${Math.round(require('os').freemem() / 1024 / 1024)} mb\n` +
                    `RSS           :: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} mb\n` +
                    `Heap Total    :: ${Math.round(process.memoryUsage().heapTotal / 1024 / 1024)} mb\n` +
                    `Heap Used     :: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} mb\n` +
                    `External      :: ${Math.round(process.memoryUsage().external / 1024 / 1024)} mb\n` +
                    `Array Buffer  :: ${Math.round(process.memoryUsage().rss / 1024 / 1024)} mb\n` +
                    `CPU Model     :: ${require('os').cpus()[0].model}\n` +
                    `Cores         :: ${require('os').cpus().length}\n` +
                    `Speed         :: ${require('os').cpus()[0].speed}Mhz\n` +
                    `Platform      :: ${process.platform}\n` +
                    `PID           :: ${process.pid}\n` +
                    `\n` + `\`\`\``)
					
            .setColor("#9966ff")
            
        .setTimestamp(Date.now());
        msg.edit({embeds: [rembed]});
        }, 10000);})
  
        client.manager.init(client.user.id);
        console.log(`${client.user.username} online!`);
} 
