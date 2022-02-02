let database = require("quick.db");

exports.run = async (client, message) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }

  let log = message.mentions.channels.first();
  if (!log)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için* \`abonelog\` *kanalı ayarlamalısın.* \n<:pempe:932898261252079677> **Örnek;** \`-abonelog #kanal\``
    );

  database.set(`abonelog.${message.guild.id}`, log.id);
  message.channel.send(
    `<:pempe:932898261252079677> *İşte oldu,* \`abone-log\` *kanalı* **${log}** *kanalı olarak* **ayarlandı.**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone-log","abonelog"],
  perm: 0
};
exports.help = {
  name: "abonelog"
};

exports.play = {
  kullanım: "abonelog #kanal",
  açıklama: "Abone Logunu Ayarlarsınız",
  kategori: "Abone"
};
