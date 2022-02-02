const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  database.delete(`kayıt-kadın.${message.guild.id}`);
  database.delete(`kayıt-tag.${message.guild.id}`);
  database.delete(`kayıt-kayıtsız.${message.guild.id}`);
  database.delete(`kayıt-erkek.${message.guild.id}`);
  database.delete(`kayıt-kanal.${message.guild.id}`);
  return message.channel.send(new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setURL('https://discord.gg/5V74ghPMWJ')
  .setDescription(`**<:kirmizi:933264837654478918> İşte bu kadar!**
*Bize sistemi neden kapattığınızı söylemek ister misiniz?*
*Destek sunucumuza giriş yaparak hatayı* **belirtebilirsin.**`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kayıtkapat'],
  permLevel: 0
};

exports.help = {
  name: 'kayıt-kapat'
};// codare ♥