let database = require("quick.db");

exports.run = async (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için bir* \`abone rolü\` *ayarlaman gerekiyor.*\n<:pempe:932898261252079677> **Örnek;** \`abonerol @rol\``
    );

  database.set(`abonerol.${message.guild.id}`, rol.id);
  message.channel.send(
    `<:pempe:932898261252079677> *İşte oldu,* \`abone-rolü\` **${rol}** *rolü olarak* **ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-rolü"],
  perm: 0
};
exports.help = {
  name: "abonerol"
};

exports.play = {
  kullanım: "y!abonerol @rol",
  açıklama: "Abone Rolünü Ayarlarsınız",
  kategori: "Abone"
};
