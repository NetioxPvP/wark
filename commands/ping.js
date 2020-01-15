newFunction(); //connection du bot

function newFunction() {
    const Discord = require('discord.js'); // Utilisation du module "discord.js"
    const client = new Discord.Client(); // Création d"un client Discord
    const fs = require('fs'); // Utilisation du module "fs"
    client.on('ready', () => {
        console.log(`Connéctée avec pour nom ${client.user.tag}.`); // Affichage d'uen réponce dans la console
    });
    client.on('message', msg => {
        if (msg.content === '!connect') { // message "ping" réponce "pong"
            msg.reply('```Est Entrain De Se Connecter```');
        }
    });
    client.login('NjY3MDM2NTk3OTEyNDY5NTI3.Xh9GkQ.0nuBhJyWwwZX2Fpn0cQbpkUBsoc');
}
