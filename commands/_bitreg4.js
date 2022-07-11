/*CMD
  command: /bitreg4
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
🏦 *Nama Bank :*
_Support BCA, BNI, Mandiri, Ovo, Gopay, Dana_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("bank", data.message, "text");
Bot.runCommand("/bitreg5");
