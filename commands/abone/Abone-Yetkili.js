let database = require("quick.db");

exports.run = async (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }

  let rol = message.mentions.roles.first();
  if (!rol)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için bir* \`yetkili-rolü\` *ayarlaman gerekiyor.* \n<:pempe:932898261252079677> **Örnek;** \`-abone-yetkili-rol @rol\``
    );

  database.set(`aboneyetkilisi.${message.guild.id}`, rol.id);
  message.channel.send(
    `<:pempe:932898261252079677> *İşte oldu,* \`abone-yetkilisi\` **${rol}** *rolü olarak* **ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-y-rol","abone-yetkilisi","abone-yetkili-rol","abone-admini"],
  perm: 0
};
exports.help = {
  name: "abone-yetkili"
};

exports.play = {
  kullanım: "y!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};
