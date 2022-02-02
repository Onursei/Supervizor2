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


  .addField(`**> ${p}kullanıcı-menü**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}yetkili-menüsü**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}kayıt-sistemi**`, "> <:pempe:932898261252079677>", true)
  .addField(`**> ${p}emoji-sistemi**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}yedek-sistemi**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}cevap-sistemi**`, "> <:yesil:933264429179617290>", true)
  .addField(`**> ${p}abone-sistemi**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}koruma-sistemi**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`**> ${p}logo-sistemi**`, "> <:kirmizi:933264837654478918>", true)
  .addField(`━`, " <:bilgi:924215711767875584> Beni kullanırken hata almamak için **rolümü** üstte tut! [**Tıkla!**](https://cdn.discordapp.com/attachments/922059318692552764/931829500038230036/xxxxx.gif)\n<:bilgi:924215711767875584> Beni sunucuna **davet** etmek ve kullanmak için: [**Tıkla!**](https://discord.com/oauth2/authorize?client_id=935853816497184768&scope=bot&permissions=10468982846)\n━",true)

  

  
  .setFooter(`${message.author.username} kullandı!`, message.author.displayAvatarURL({dynamic: true}))
  .setImage(`https://cdn.discordapp.com/attachments/935854672177152030/935857012904951808/standard.gif`)
  return message.channel.send(embed)
};
exports.conf = {
  aliases: ["h", "yardım", "y"],
  permLevel: 0
}
exports.help = {
  name: "help",
  cooldown: 8
}