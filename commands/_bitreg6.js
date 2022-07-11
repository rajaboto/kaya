/*CMD
  command: /bitreg6
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💬 *Nomor WhatsApp :*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("wa", data.message, "text");
Bot.runCommand("/profils");
