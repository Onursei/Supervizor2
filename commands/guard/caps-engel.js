const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let acod = ["ayarla", "aç", "ac"];
  let kapare = ["kapat", "sıfırla", "sifirla"];
  let acikmi = await db.fetch(`${message.guild.id}.capsengel`);

  if (!message.member.hasPermission("ADMINISTRATOR")) {
    return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sisteme erişim sağlaman için \`Yönetici\` yetkinin olması gerekir.");
   }
  let aredembed = new Discord.MessageEmbed()

    .setAuthor("CapsLock Engelleme Sistemi")
    .setColor("RED")
    .setFooter(
      `Komut ${message.author.username} tarafından kullanıldı.`,
      message.author.displayAvatarURL({ dynamic: true })
    )
    .setTimestamp();
  if (acod.includes(args[0])) {
    if (!args[1]) {
      if (acikmi)
        return message.channel.send(
          aredembed.setDescription(
            "<:pempe:932898261252079677> Hey, \`caps-lock\` engelleme sistemi **aktif** gözüküyor, işte **bilgilendirme;**\n\n<:kirmizi:933264837654478918> Bir mesajdaki büyük harf oranı eğer mesajın `" +
              acikmi.yuzde +
              "` sinden daha fazla ise engelenecektir.\n\n<:yesil:933264429179617290> Eğer ki bu oranı arttırmak veya azaltmak istersen; `-capsengel aç oran` \n(Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\n\n<:mavi:933322221567496193> Eğer ki caps-lock engelleme sistemini kapatmak isterseniz \`-capsengel sıfırla\` komutunu kullanabilirsiniz."
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme Sistemi")
          .setDescription(
            "<:pempe:932898261252079677> Hey, \`caps-lock\` engelleme sistemi **aktif** edildi!\n\n<:kirmizi:933264837654478918> Bir mesajda ki büyük harf oranı eğer mesajın `50%` sinden daha fazla ise engelenecektir.\n\n<:yesil:933264429179617290> Eğer ki bu oranı arttırmak veya azaltmak isterseniz \`-capsengel aç oran\`\n(Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\n\n<:mavi:933322221567496193> Eğer ki caps-lock engelleme sistemini kapatmak isterseniz \`-capsengel sıfırla\` komutunu kullanabilirsiniz."
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: "50" });
    } else {
      if (isNaN(args[1]))
        return message.channel.send(
          aredembed.setDescription(
            "<:pempe:932898261252079677> Hey, oran yalnızca bir **sayı** olmalıdır.\n\n<:pempe:932898261252079677> (Oran 101 den küçük 0 dan büyük bir sayı olmalıdır!)"
          )
        );
      if (args[1] >= 101)
        return message.channel.send(
          aredembed.setDescription(
            "<:pempe:932898261252079677> Hey, oran 101 den küçük, 0 dan büyük bir **sayı olmalıdır!**"
          )
        );
      if (args[1] <= 0)
        return message.channel.send(
          aredembed.setDescription(
            "<:pempe:932898261252079677> Hey, oran 101 den küçük, 0 dan büyük bir **sayı olmalıdır!**"
          )
        );
      message.channel.send(
        new Discord.MessageEmbed()
          .setColor("GREEN")
          .setAuthor("CapsLock Engelleme Sistemi")
          .setDescription(
            "<:pempe:932898261252079677> Hey, \`caps-lock\` engelleme sistemi **aktif** edildi!\n\n<:kirmizi:933264837654478918> Bir mesajdaki büyük harf oranı eğer mesajın `" +
              args[1] +
              "%` sinden daha fazla ise engelenecektir.\n\n<:yesil:933264429179617290> Eğer ki bu oranı arttırmak veya azaltmak istersen; \`-capsengel aç oran\` \n(Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\n\n<:mavi:933322221567496193> Eğer ki CapsLock Engelleme sistemini kapatmak isterseniz \`-capsengel sıfırla\` komutunu kullanabilirsiniz.\n\n<:mavi:933322221567496193> \`Not: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.\`"
          )
          .setFooter(
            `Komut ${message.author.username} tarafından kullanıldı.`,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setTimestamp()
      );
      db.set(`${message.guild.id}.capsengel`, { yuzde: args[1] });
    }
  } else if (kapare.includes(args[0])) {
    if (!acikmi)
      return message.channel.send(
        aredembed.setDescription(
          "<:pempe:932898261252079677> Hey, \`caps-lock\` engelleme sistemi zaten **kapalı!**\n\n<:kirmizi:933264837654478918> Eğer açmak isterseniz \`-capsengel aç oran\` yazabilirsiniz. (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\n\n<:mavi:933322221567496193> \`Not: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.\`"
        )
      );
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("YELLOW")
        .setAuthor("CapsLock Engelleme")
        .setDescription(
          "<:pempe:932898261252079677> Hey, \`caps-lock\` engelleme sistemi **kapatıldı!**\n\n<:kirmizi:933264837654478918> Artık mesajlardaki büyük harfler **engellenmeyecek.** \n\n<:mavi:933322221567496193> Eğer ki tekrar açmak isterseniz \`-capsengel aç oran\` komutunu kullanabilirsiniz. \n\n<:yesil:933264429179617290> (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)\n\n<:mavi:933322221567496193> \`Not: Eğer oran yazmazsanız otomatik olarak 50% olarak ayarlanacaktır.\`"
        )
        .setFooter(
          `Komut ${message.author.username} tarafından kullanıldı.`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTimestamp()
    );
    db.delete(`${message.guild.id}.capsengel`);
  } else {
    let acikkk;
    if (acikmi)
      acikkk = `${acikmi.yuzde}% olarak Açık**\n<:pempe:932898261252079677> Eğer sistemi kapatmak isterseniz \`-capsengel sıfırla\` yazabilirsiniz.`;
    let kodare = new Discord.MessageEmbed()
      .setAuthor("CapsLock Engelleme")
      .setColor("#728bd6")
      .setDescription(
        "<:pempe:932898261252079677> \`Caps-lock\` engelleme sistemi şu anda **" +
          (acikkk
            ? acikkk
            : "Kapalı**\n<:kirmizi:933264837654478918> Eğer açmak isterseniz `-capsengel aç` yazabilirsiniz.") +
          "."
      )
      .setFooter(
        `Komut ${message.author.username} tarafından kullanıldı.`,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTimestamp();
    message.channel.send(kodare)
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [
    "buyukharfengelle",
    "caps-engelle",
    "capslockengelle",
    "capslock-engelle",
    "caps-engel",
    "capslock"
  ],
  permLevel: 4,
  kategori: "sunucu"
};
exports.help = {
  name: "capsengel",
  description:
    "Eğer açılırsa bir mesajda belirttiğiniz %de kadar harf büyük yazılmışsa o mesaj silinir.",
  usage: "capsengel aç/sıfırla oran (Oran 101 den küçük, 0 dan büyük bir sayı olmalıdır!)"
};