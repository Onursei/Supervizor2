const Discord = require('discord.js');
const db = require('croxydb');

exports.run = async (client, message, args) => {

  
  
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.**  `)
  const linqo = `https://habbofont.net/font/scifi/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("#f8ff00")
  .setImage(linqo)
  .setFooter('Sci-fi Logo Oluşturuldu')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yazıfoto','yazı-foto'],
    permLevel: 0
}

exports.help = {
    name: 'sci-fi',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'sci-fi <yazı>'
}