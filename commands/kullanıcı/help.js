const Discord = require('discord.js');
const qdb = require('quick.db');
const ayarlar = require('../../ayarlar.json');
exports.run = async(client, message, args) => {
  var a = qdb.fetch(`prefix_${message.guild.id}`) //ewing
  if(a){ 
    var p = a
  }
  if(!a){
    var p = ayarlar.prefix
  }
  const embed = new Discord.MessageEmbed()
  .setColor("purple")
.setAuthor(`${client.user.username} Komutlar`, client.user.displayAvatarURL({dynamic: true}))
//.setThumbnail(message.author.displayAvatarURL())
.setDescription(`
\n
━`)


.addField(`**> ${prefix}avatar**`, "> <:pempe:932898261252079677>", true)
.addField(`**> ${prefix}istatistik**`, "> <:pempe:932898261252079677>", true)
.addField(`**> ${prefix}profil**`, "> <:pempe:932898261252079677>", true)
.addField(`**> ${prefix}roller**`, "> <:yesil:933264429179617290>", true)
.addField(`**> ${prefix}ses**`, "> <:yesil:933264429179617290>", true)
.addField(`**> ${prefix}tdk**`, "> <:yesil:933264429179617290>", true)
.addField(`━`, " <:bilgi:924215711767875584> Beni kullanırken hata almamak için **rolümü** üstte tut! [**Tıkla!**](https://cdn.discordapp.com/attachments/922059318692552764/931829500038230036/xxxxx.gif)\n<:bilgi:924215711767875584> Beni sunucuna **davet** etmek ve kullanmak için: [**Tıkla!**](https://discord.com/oauth2/authorize?client_id=935853816497184768&scope=bot&permissions=10468982846)\n━",true)




.setFooter(`${message.author.username} kullandı!`, message.author.displayAvatarURL({dynamic: true}))
.setImage(`https://cdn.discordapp.com/attachments/935854672177152030/935857012904951808/standard.gif`)
  return message.channel.send(embed)
};
exports.conf = {
  aliases: ["kullanıcı-menü", "kullanıcı", "kullanıcimenüsü"],
  permLevel: 0
}
exports.help = {
  name: "kullanıcı-menü",
  cooldown: 8
}