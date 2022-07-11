/*CMD
  command: /signal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Mata Uang*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("uang", data.message, "text");
Bot.runCommand("/brpsl");
