const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  if(!message.mentions.roles.first()) return message.reply('<:kirmizi:933264837654478918> Hey, lütfen ayarlamak istediğin \`erkek\` rolünü **belirt!**');

  const role = message.mentions.roles.first();
  database.set(`kayıt-erkek.${message.guild.id}`, role.id);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('purple')
  .setTitle('<:kirmizi:933264837654478918> İşte bu kadar!')
  .setFooter('Eğer ki \`erkek\` rolünü değiştirmek istersen tekrar etiketlemen yeterli.')
  .setDescription(`<:yesil:933264429179617290> \`erkek\` rolünü **${role.name}** olarak **ayarladım!**`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıterkek'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-erkek'
};