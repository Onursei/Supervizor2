const akaneko = require("akaneko")
const Discord = require("discord.js")

exports.run = async(bot, message, args) => {
    const answer = args.join(" ")

    if (!answer) {
        const blank = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Errrrk!')
            .setDescription('Lütfen bir tür giriniz.')
            .addField('Türler:', 'ass\nbdsm\nblowjob\ncum\ndoujin\nfeet\nfemdom\nfoxgirl\ngifs\nglasses\nhentai\nnetorare\nmaid\nmasturbation\norgy\npanties\npussy\nschool\nsuccubus\ntentacles\nthighs\nuglyBastard\nuniform\nyuri\nzettaiRyouiki', true)
            .setTimestamp()
            .setFooter('Nsfw command.');

        message.channel.send(blank)
    } else if (!message.channel.nsfw) {
        message.channel.send(":x: Bu kanalda NSFW seçeneği açık değil. Lütfen açık olan kanalda deneyin.") //bu komut cko utnrk yaptigm komt guyz plz like folw and sub
    } else if (answer == 'ass') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.ass())
        message.channel.send(embed)
    } else if (answer == 'bdsm') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.bdsm())
        message.channel.send(embed)
    } else if (answer == 'blowjob') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.blowjob())
        message.channel.send(embed)
    } else if (answer == 'cum') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.cum())
        message.channel.send(embed)
    } else if (answer == 'blowjob') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.blowjob())
        message.channel.send(embed)
    } else if (answer == 'doujin') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.doujin())
        message.channel.send(embed)
    } else if (answer == 'feet') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.feet())
        message.channel.send(embed)
    } else if (answer == 'femdom') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.femdom())
        message.channel.send(embed)
    } else if (answer == 'foxgirl') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.foxgirl())
        message.channel.send(embed)
    } else if (answer == 'gifs') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.gifs())
        message.channel.send(embed)
    } else if (answer == 'glasses') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.glasses())
        message.channel.send(embed)
    } else if (answer == 'hentai') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.hentai())
        message.channel.send(embed)
    } else if (answer == 'netorare') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.netorare())
        message.channel.send(embed)
    } else if (answer == 'maid') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.maid())
        message.channel.send(embed)
    } else if (answer == 'masturbation') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.masturbation())
        message.channel.send(embed)
    } else if (answer == 'orgy') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.orgy())
        message.channel.send(embed)
    } else if (answer == 'panties') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.panties())
        message.channel.send(embed)
    } else if (answer == 'pussy') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.pussy())
        message.channel.send(embed)
    } else if (answer == 'school') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.school())
        message.channel.send(embed)
    } else if (answer == 'succubus') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.succubus())
        message.channel.send(embed)
    } else if (answer == 'tentacles') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.tentacles())
        message.channel.send(embed)
    } else if (answer == 'thighs') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.thighs())
        message.channel.send(embed)
    } else if (answer == 'uglyBastard') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.uglyBastard())
        message.channel.send(embed)
    } else if (answer == 'uniform') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.uniform())
        message.channel.send(embed)
    } else if (answer == 'yuri') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.yuri())
        message.channel.send(embed)
    } else if (answer == 'zettaiRyouiki') {
        const embed = new Discord.MessageEmbed()
            .setImage(await akaneko.nsfw.zettaiRyouiki())
        message.channel.send(embed)
    } else {
        const wrongarr = new Discord.MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Errrrk!')
            .setDescription('Yanlış tür.')
            .setTimestamp()
            .setFooter('Nsfw command.');

        message.channel.send(wrongarr)

    }


};

exports.conf = {
    aliases: ['nsfw'],
    permLevel: 0,
    kategori: "Eğlence",
};

exports.help = {
    name: 'NSFW',
    description: 'Sadece NSFW kanalına istediğiniz tür fotoğraf atar.',
    usage: 'nsfw <tür adı>',

};