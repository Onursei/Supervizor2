const Discord = require('discord.js');
const db = require('croxydb');


exports.run = async (client, message, args) => {

  
  
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.**  `)
  const linqo = `https://habbofont.net/font/neon_blue/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("#f6ff00")
  .setImage(linqo)
  .setFooter('Neon Font Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'neon',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'neon <yazı>'
}