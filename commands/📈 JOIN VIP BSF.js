/*CMD
  command: š JOIN VIP BSF
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
if(data.message=="š JOIN VIP BSF"){
   Bot.runCommand("/verifi1")
}else{
  Bot.sendKeyboard("š JOIN VIP BSF,š FREE TRIAL\nš² JOIN BIT10,š¬ SUPPORT","*anda dapat mencobanya kembali di lain waktu!*");
  }
 return
 } 
 Bot.sendKeyboard("š JOIN VIP BSF,š FREE TRIAL\nš² JOIN BIT10,š¬ SUPPORT","ā*Data anda sudah terdaftar sebelumnya!*");
