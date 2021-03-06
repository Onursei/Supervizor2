const db = require("quick.db")
const dc = require("discord.js")
const backup = require("discord-backup")

exports.run = async (client, message, args) => {
  let backupID = args[0]
  let a = db.get(`yedek_${backupID}`)
  if(a === message.author.id) {
  let embed = new dc.MessageEmbed()
  .setTitle("Başarılı")
  .setDescription("Yedek **Başarıyla Silindi**.")
  .setTimestamp()
 
  message.channel.send(embed)
  backup.remove(backupID)
  db.delete(`yedek_${backupID}`)
  db.delete(`toplam_${message.author.id}`, 1)
  db.set(`y_${message.author.id}`, db.get(`y_${message.author.id}`).filter(z => z.id !== backupID))
  } else {
    message.channel.send(":x: Böyle Bir Yedeğin Yok!")
    }
  }

		exports.conf = {
  enabled: true,
  aliases: ['yedek-sil', 'yedek-del'],
  permLevel: 3
};

exports.help = {
  name: 'yedek sil'
};