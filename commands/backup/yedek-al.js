const backup = require("discord-backup");
const prex = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  
  let anan = db.get(`toplam_${message.author.id}`) || "0"
  if (!message.member.hasPermission("ADMINISTRATOR")) {
   return message.channel.send("<:pempe:932898261252079677> Merhaba, bu sistemi kullanabilmen için \`ADMINISTRATOR\` yetkisine erişmen gerekir.");
  }
  if (anan < 15) {
    backup.create(message.guild).then((backupData) => {
        db.set(`yedek_${backupData.id}`, message.author.id);
        const date = new Date(backupData.createdTimestamp);
        const yyyy = date.getFullYear().toString(), mm = (date.getMonth() + 1).toString(), dd = date.getDate().toString();
        const formattedDate = `${dd[1] ? dd : "0" + dd[0]}/${mm[1] ? mm : "0" + mm[0]}/${yyyy}`;
        db.add(`toplam_${message.author.id}`, 1);
        db.push(`y_${message.author.id}`, {
          adı: backupData.name,
          id: backupData.id,
          tarih: formattedDate
        });
    
        let embed = new prex.MessageEmbed()
          .setDescription(`<:pempe:932898261252079677> **İştee, yedek alındı!**\n<:pempe:932898261252079677> **Yedek bilgileri;**\n \n<:kirmizi:933264837654478918> **Yedek ID'si;**\n> \`\`\`${backupData.id}\`\`\`\n<:kirmizi:933264837654478918> **Yedek bilgisi için;**\n> \`\`\`-yedek-bilgi ${backupData.id}\`\`\`\n<:kirmizi:933264837654478918> **Yedeği yüklemek için;**\n> \`\`\`-yedek-yükle ${backupData.id}\`\`\``)
          .setTimestamp()
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
          .setImage(`https://cdn.discordapp.com/attachments/922059318692552764/931818558252523520/ezgif.com-gif-maker.gif`)
          .setFooter("Yedek id'ni kimseyle paylaşma!", message.author.avatarURL({ dynamic: true }));
        return message.channel.send(embed)
				  .then(msg => {
    msg.delete({ timeout: 60000 })
  })

      })
      .catch(() => {
        return message.channel.send(
          ":x: Bir Hata Oluştu. Botun Yönetici Yetkisine Sahip Olduğundan Emin Ol!"
        );
      });
  }
};

exports.conf = {
  enabled: true,
  aliases: ['sunucu-yedek-al', 'yedekle'],
  permLevel: 3
};

exports.help = {
  name: 'sunucu-yedek-al'
};