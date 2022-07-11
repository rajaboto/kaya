/*CMD
  command: 📈 JOIN VIP BSF
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgID=data.user.telegramid;
if(data.user.telegramid!=1217304482)
{
if(data.message=="📈 JOIN VIP BSF"){
   Bot.runCommand("/verifi1")
}else{
  Bot.sendKeyboard("📈 JOIN VIP BSF,📉 FREE TRIAL\n💲 JOIN BIT10,💬 SUPPORT","*anda dapat mencobanya kembali di lain waktu!*");
  }
 return
 } 
 Bot.sendKeyboard("📈 JOIN VIP BSF,📉 FREE TRIAL\n💲 JOIN BIT10,💬 SUPPORT","❗*Data anda sudah terdaftar sebelumnya!*");
