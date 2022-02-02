const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  if(!args[0]) return message.reply(`\n<:pempe:932898261252079677> *Hey, eğer ki bir tag ayarlamak istiyorsan;* \`-kayıt-tag\`\n<:kirmizi:933264837654478918> *Tagı kaldırmak için;* \`-kayıt-tag sıfırla\` *yazman* **yeterlidir.**`);
  if(args[0] === 'sıfırla') {
    database.delete(`kayıt-tag.${message.guild.id}`);
    return message.reply('<:kirmizi:933264837654478918> *İşte bu kadar, tag sistemini* **sıfırladım!**');
  } else {
    database.set(`kayıt-tag.${message.guild.id}`, args[0]);
    return message.channel.send(new Discord.MessageEmbed()
    .setColor('purple')
    .setTitle('<:kirmizi:933264837654478918> *İşte bu kadar, tag sistemini* **ayarladım!**')
    .setFooter('Eğer ki \`tagını\` değiştirmek istersen tekrar etiketlemen yeterli.')
    .setDescription(`<:yesil:933264429179617290> \`tagını\` **${args[0]}** olarak **ayarladım!**`));
    
  };
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıttag'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-tag'
};// codare ♥