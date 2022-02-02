const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(`\`Youtube'da aratmak istediğin kelimeyi yazmalısın.\``)
        if(!link)return message.reply("\`ERROR\`")
        let embed = new Discord.MessageEmbed()
 
        .setColor("purple")
        .setAuthor(`${client.user.username} Youtube Search`, client.user.displayAvatarURL({dynamic: true}))
        //.setThumbnail(message.author.displayAvatarURL())
        .setDescription(`
        \n
        ━━━━━━━━━━━━━━━━━━━━━━━━━━`)
        
        
        .addField(`**> ${prefix}Aranıyor;**${args.slice(0).join(' ')}`, "<a:beyazkalp:843623317029650443>", true)
        .addField(`**> ${prefix}Bulundu;**${args.slice(0).join(' ')}`, "<a:beyazkalp:843623317029650443>", true)
        .addField(`**> ${prefix}Metin;**${args.slice(0).join(' ')}`, "<a:beyazkalp:843623317029650443>", true)

        .addField(`━━━━━━━━━━━━━━━━━━━━━━━━━━`, `**Sonuç;** ${link}`, `Sonuç;${link}`, " <:yildiz:913434840433569792> Beni kullanırken hata almamak için **rolümü** üstte tut! [**Tıkla!**](https://cdn.discordapp.com/attachments/922059318692552764/931829500038230036/xxxxx.gif)\n<:yildiz:913434840433569792> Hata alıyorsan **destek** sunucuma giriş yapabilirsin: [**Tıkla!**](https://discord.gg/5V74ghPMWJ)\n<:yildiz:913434840433569792> Beni sunucuna **davet** etmek ve kullanmak için: [**Tıkla!**](https://discord.com/oauth2/authorize?client_id=921799874519920720&scope=bot&permissions=8)\n━━━━━━━━━━━━━━━━━━━━━━━━━━",true)

         
        .setFooter(`${message.author.username} kullandı!`, message.author.displayAvatarURL({dynamic: true}))
        .setImage(`https://cdn.discordapp.com/attachments/922059318692552764/931818558252523520/ezgif.com-gif-maker.gif`)
    
          
              message.channel.send(embed);
      

        
    
}



exports.conf =
{
  aliases: [""]
}

exports.help =
{
    name: 'youtube',
    description: 'YouTube Search',
    usage: 'youtube'
}