let Discord = require("discord.js");
let database = require("quick.db");

exports.run = async (client, message, args) => {
  let aboneyetkilisi = await database.fetch(
    `aboneyetkilisi.${message.guild.id}`
  );
  let abonelog = await database.fetch(`abonelog.${message.guild.id}`);
  let abonerol = await database.fetch(`abonerol.${message.guild.id}`);
  let abonekisi = message.guild.member(
    message.mentions.users.first() || message.guild.members.cache.get(args[0])
  );
  if (!abonerol)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için* \`abone\` *rolü ayarlamalısın.*`
    );
  if (!abonelog)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için* \`abone-log\` *kanalı ayarlamalısın.*`
    );
  if (!aboneyetkilisi)
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sistemin çalışabilmesi için* \`abone-yetkilisi\` *ayarlamalısın.*`
    );
  let user = message.mentions.users.first();
  if (!message.member.roles.cache.has(aboneyetkilisi))
    return message.channel.send(
      `<:pempe:932898261252079677> *Merhaba, bu sisteme erişim sağlaman için* \`Abone-Yetkilisi\` *yetkinin olması gerekir.*`
    );

  if (!message.mentions.users.first())
    return message.channel.send(`<:pempe:932898261252079677> *Hey,* \`abone\` *rolü vereceğin üyeyi etiketlemelisin.*`);

  await abonekisi.roles.add(abonerol);
  const embed = new Discord.MessageEmbed()
    .setTitle(`<:pempe:932898261252079677> İşte, abone rolü başarıyla verildi!`)
    .addField(
      `<:pempe:932898261252079677> Abone rolünü veren yetkili;`,
      `<@${message.author.id}>`,
      true
    )
    .addField(
      `<:pempe:932898261252079677> Abone rolü verilen üye;`,
      `${user}`,
      true
    )
   .addField(
     `<:pempe:932898261252079677> Mesaj bağlantısı:`,`[Tıkla](https://discord.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`,
     true
   )
       .setColor("#00ff00")
  message.guild.channels.cache.get(abonelog).send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["abone","abone-ver","a"],
  perm: 0
};
exports.help = {
  name: "a"
};

exports.play = {
  kullanım: "!abone-y-rol @rol",
  açıklama: "Abone Yetkili Rolünü Ayarlarsınız",
  kategori: "Abone"
};


