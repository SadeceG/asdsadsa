const Discord = require('discord.js')
exports.run = (bot, message, args) =>
{
   if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<:BanNedPng:1170473452159897660><:BanNed2Png:1170473452159897660> **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);
 
  let Discord = require('discord.js');
    var userlist = message.guild.fetchBans();
   userlist.then(collection =>
   {
     if(collection.first() == null)
     {
       const embed = new Discord.MessageEmbed()
       .setTitle(`<:BanNedPng:1170424762040848534><:BanNed2Png:1170473452159897660>** Banlanan Kullanıcı bulunamadı**`)
       .setColor("#ffd100");
       message.channel.send({embed});
     }
     else
     {
       const embed = new Discord.MessageEmbed()
       .setTitle("<:BanNedPng:1170424762040848534><:BanNed2Png:1170473452159897660> Banlistesi | Sunucudan Banlananlar")
       .setColor("#ffd100");
       for(userlist of collection)
       {
           var user = userlist[1];
           embed.addField(` **${user.tag}**`, `_________ _____________`);
       }
       message.channel.send({embed});
     }
   });
 }
module.exports.config = {
  name: 'banlananlar',
  aliases: ["banlılar","banliste", "bansay"]
};

