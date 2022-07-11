/*CMD
  command: /tglbrp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Tanggal brp*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("tglbrp", data.message, "text");
Bot.runCommand("/reply88");
