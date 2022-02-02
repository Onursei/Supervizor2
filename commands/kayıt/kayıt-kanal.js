const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  if(!message.mentions.channels.first()) return message.channel.send(`<:kirmizi:933264837654478918> Hey, lütfen ayarlamak istediğin \`kayıt\` kanalını **belirt!**`);
  const channel = message.mentions.channels.first();
  database.set(`kayıt-kanal.${message.guild.id}`, channel.id);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('purple')
  .setTitle('<:kirmizi:933264837654478918> İşte bu kadar!')
  .setFooter('Eğer ki \`kayıt\` kanalını değiştirmek istersen tekrar etiketlemen yeterli.')
  .setDescription(`<:yesil:933264429179617290> \`kayıt\` kanalını **${channel}** olarak **ayarladım!**`));
  

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtkanal'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kanal'
};// codare ♥