const Discord = require('discord.js');
const moment = require('moment')
require('moment-duration-format')

var os 	= require('os-utils');




exports.run = async(client, message, args) => {
	os.cpuUsage(function(v){
	const cpus = v 

const duration = moment.duration(client.uptime).format("D [gün], H [saat], m [dakika], s [saniye]")
const embed = new Discord.MessageEmbed()
.setColor("00447e")
.setDescription(`
\n
━━━━━━━━━━━━━━━━━━━━━━━━━━`)
.setAuthor(`${client.user.username} İstatistikleri`, client.user.displayAvatarURL({dynamic: true}))
.addField("<:pempe:932898261252079677> Gecikme", `${client.ws.ping} ms`, true)
.addField("<:pempe:932898261252079677> Çalışma Süresi", duration, true)
.addField("<:pempe:932898261252079677> Kullanıcılar", client.users.cache.size, true)
.addField("<:kirmizi:933264837654478918> Kanallar", client.channels.cache.size, true)
.addField("<:kirmizi:933264837654478918> Sunucular", client.guilds.cache.size, true)
.addField("<:kirmizi:933264837654478918> Sürümü", Discord.version, true)
.addField(`━━━━━━━━━━━━━━━━━━━━━━━━━━`, " <:yildiz:913434840433569792> Beni kullanırken hata almamak için **rolümü** üstte tut! [**Tıkla!**](https://cdn.discordapp.com/attachments/922059318692552764/931829500038230036/xxxxx.gif)\n<:yildiz:913434840433569792> Hata alıyorsan **destek** sunucuma giriş yapabilirsin: [**Tıkla!**](https://discord.gg/5V74ghPMWJ)\n<:yildiz:913434840433569792> Beni sunucuna **davet** etmek ve kullanmak için: [**Tıkla!**](https://discord.com/oauth2/authorize?client_id=921799874519920720&scope=bot&permissions=8)\n━━━━━━━━━━━━━━━━━━━━━━━━━━",true)

.setImage(`https://cdn.discordapp.com/attachments/922059318692552764/931818558252523520/ezgif.com-gif-maker.gif`)
.setFooter(message.author.username, message.author.displayAvatarURL({dynamic: true}))
.setTimestamp()
return message.channel.send(embed)
});
};
exports.conf = {
aliases: ['i', 'istatistik', 'bot-bilgi'],
permLevel: 0
};
exports.help = {
name: "botbilgi"
}