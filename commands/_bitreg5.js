/*CMD
  command: /bitreg5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🏦 *Nomor Rekening :*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("norek", data.message, "text");
Bot.runCommand("/bitreg6");
