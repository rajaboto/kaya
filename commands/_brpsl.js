/*CMD
  command: /brpsl
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nilai SL*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("sl", data.message, "text");
Bot.runCommand("/brptp");
