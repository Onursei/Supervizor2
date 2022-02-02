const discord = require("discord.js");
const { MessageButton } = require('discord-buttons');
const db = require("quick.db") //ben quick db kullandım ama set,delete ve has methodu olan başka bir db de kullanabilirsiniz dostlar

exports.run = (client, message, args) => {
    
    db.delete(`cevapladimi_${message.author.id}`)

    let sorular = [{
            soru: "Yeniliklerin sürekliliğini zorunlu gören Atatürk İlkesi, aşağıdakilerden hangisidir?",
            siklar: ["milliyetçilik", "cumhuriyetçilik", "laiklik", "halkçılık", "inkılapçılık"],
            dogrucevap: 'D',
        },
        {
            soru: "Millî Mücâdele’nin kazanılmasında, aşağıdaki Atatürk ilkelerinden hangisi daha etkili olmuştur?",
            siklar: ["cumhuriyetçilik", "milliyetçilik", "akılcılık", "devletçilik", "halkçılık"],
            dogrucevap: 'B',
        },
        {
            soru: "Atatürk kaç yılında doğdu ve kaç yılında doğdu?",
            siklar: ["1883", "1881", "1903", "1938", "1930"],
            dogrucevap: 'B',
        },
        {
            soru: "İnsan; daha güçlü canlılara karşı tek başına kendini koruyamaz, tek başına ihtiyaçlarını karşılayamaz dolayısıyla bir arada yaşamak tabii ve zaruridir. Bu cümlede aşağıdakilerden hangisi yoktur?",
            siklar: ["Niteleme sıfatını niteleyen zarf", "Yönelme durumuyla kullanılan edat", "Yeterlilik bildiren olumsuz fiil", "Üçüncü çoğul iyelik eki almış isim", "Belirtme durumu eki almış zamir"],
            dogrucevap: 'D',
        },
        {
            soru: "Başarılı olmak için çıktığın yolda bir gözün başkalarının ne yaptığıyla ilgilenirse hedefine ulaşmak için kullanabileceğin tek gözün kalır. Bu cümlede anlatılmak istenen aşağıdakilerden hangisidir?",
            siklar: ["Kişilerin kendilerini başkalarıyla kıyaslamaları, kendilerini tanımalarını engeller.", "Kendi çaba ve çalışmalarına odaklanan kişiler, başarıya daha kolay ulaşır", "İnsanlar kendi yeteneklerini keşfettikleri ve geliştirdikleri ölçüde başarılı olur", "Başarılı olmak isteyen kişiler başkalarının ne düşündüğünü ön plana koymalıdır.", "Başkalarından takdir görmek için sergilenen gayretler, gelecek başarıyı geciktirir."],
            dogrucevap: 'B',
        },
        {
            soru: "Fatih Sultan Mehmed'in Hocası Kimdir?",
            siklar: ["akşemsettin", "mevlana", "şeyh edebali", "tursun bey"],
            dogrucevap: 'A',
        },
        {
            soru: "Aşağıdakilerden hangisi, 27 Mayıs 1960 Askerî Darbesi sonrasında kurulan, Genel Başkanlığını Ragıp Gümüşpala'nın üstlendiği ve Demokrat Partinin devamı niteliğinde olan siyasi partidir? (2018 KPSS SORUSU)",
            siklar: ["milli kalkınma partisi", "adalet partisi", "millet partisi", "hürriyet partisi", "ahali cumhuriyet partisi"],
            dogrucevap: 'B',
        },
        {
            soru: "“ Olmak ya da olmamak, işte bütün mesele bu.” sözüyle tanınan, Hamlet oyununun yazarı İngiliz edebiyatçı aşağıdakilerden hangisidir? (2018 KPSS SORUSU)",
            siklar: ["george eliot", "thomas more", "william shakespeare", "charles dickens", "daniel defoe"],
            dogrucevap: 'C',
        },
    ]; //bu array içindeki soruları kendiniz arttırabilirsiniz yukarıdaki örneklere bakarak yapabileceğinizi düşünüyorum
    var butonlararr = []
    var engcharlar = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'I', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    let sorurandom = sorular[Math.floor(Math.random() * sorular.length)];
    for (var i = 0; i < sorurandom.siklar.length; i++) {
        var eklenecek = engcharlar[i].toLocaleUpperCase() + " - "
        sorurandom.siklar[i] = eklenecek + sorurandom.siklar[i];
    }
    for (var i = 0; i < sorurandom.siklar.length; i++) {
        var karakterlerdençek = engcharlar[i].toLocaleUpperCase()
        butonlararr.push(new MessageButton().setStyle('green').setLabel(karakterlerdençek).setID(karakterlerdençek))
    }
    const Embed = new discord.MessageEmbed()
        .setTitle(sorurandom.soru)
        .setDescription(
            sorurandom.siklar.join("\n\n")
        )
        .setColor(`GREEN`)
        .setFooter(
            `Bu Soruya Cevap Vermek İçin 40 Saniyen Var!`
        );
    message.channel.send(Embed, {
        buttons: butonlararr
    }).then(async function (sorucollector) {
        sorucollector.createButtonCollector(user => user.clicker.user.id == message.author.id).on('collect', async (button) => {
            if (button.id.toLowerCase() == sorurandom.dogrucevap.toLowerCase()) {
                const doğru = new discord.MessageEmbed()
                    .setAuthor("✅ Doğru Cevap!")
                    .setDescription("**Doğru Bildiniz!**")
                    .setColor("GREEN")
                message.channel.send(doğru)
                button.reply.defer()
                db.set(`cevapladimi_${message.author.id}`, "evet")
                return sorucollector.delete().catch(() => console.log("mesaj bulunamadı ama handlelandı"))

            } else {
                const yanlış = new discord.MessageEmbed()
                    .setAuthor("❌ Yanlış Cevap!")
                    .setDescription(`**Yanlış Cevap Verdiniz Doğru Cevap ${sorurandom.dogrucevap.toUpperCase()} Olmalıydı!**`)
                    .setColor("RED")
                message.channel.send(yanlış)
                button.reply.defer()
                db.set(`cevapladimi_${message.author.id}`, "evet")
                return sorucollector.delete().catch(() => console.log("mesaj bulunamadı ama handlelandı"))
            }
        })
        setTimeout(() => {
            if(db.has(`cevapladimi_${message.author.id}`)) return
            sorucollector.delete().catch(() => console.log("mesaj bulunamadı ama handlelandı"))
            const mesajyok = new discord.MessageEmbed()
            .setAuthor("❌ Soru İptal Edildi!")
            .setDescription("**Soruyu Çözmek İçin Verilen 40 Saniye Doldu!**")
            .setColor("RED")
             message.channel.send(mesajyok).then(msg => {
                 setTimeout(() => {
                     msg.delete().catch(() => console.log("mesaj bulunamadı ama handlelandı"))
                 }, 5000);
             })
        }, 40000);
    })



}; //CodAre ❤
exports.conf = {
    aliases: ['soru-çöz'],
    permLevel: 0,
    kategori: "Eğlence",
};
exports.help = {
  name: 'soru-çöz',
  description: 'Bilgi Yarışması Oynarsınız.',
  usage: 'trivia'
};