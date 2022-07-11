/*CMD
  command: 📉 FREE TRIAL
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
❓*Apakah anda yakin ingin menggunakan trial?*

*Harap dicatat:*
_Signal Trial Kami tidak menjamin akurasinya!_
  ANSWER
  keyboard: ✅ YA, ❎ TIDAK
  aliases: 
CMD*/

var tgID=data.user.telegramid;
if(data.user.telegramid!=1217304482)
if(data.user.telegramid!=1904452240)
if(data.user.telegramid!=791988769)
if(data.user.telegramid!=1243898716)
if(data.user.telegramid!=1876592562)
if(data.user.telegramid!=1074782607)
if(data.user.telegramid!=885008020)
{
if(data.message=="✅ YA"){
   Bot.runCommand("/permintaantrial")
}else{
  Bot.runCommand("/Opps");
  }
 return
 } 
 Bot.sendKeyboard("📈 JOIN VIP BSF,📉 FREE TRIAL\n🗓️ CARA KERJA,💬 SUPPORT","❗*Data anda sudah terdaftar sebelumnya!*");
