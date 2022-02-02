const Discord = require('discord.js');
module.exports.run = async(client, message) => {
const embed = new Discord.MessageEmbed()
.setColor("00447e")
.setAuthor(`${client.user.username} Davet`, client.user.displayAvatarURL({dynamic: true}))
.setDescription(`
Beni sunucuna eklemek için [TIKLA](https://discord.com/oauth2/authorize?client_id=921799874519920720&scope=bot&permissions=8)
Destek sunucum için [TIKLA](https://discord.gg/EHXsHaB3Bj)
`)
.setImage("")
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic: true}))
return message.channel.send(embed)
};
module.exports.conf = {aliases: ["invite"], permLevel: 0};
module.exports.help = {name: "davet"}