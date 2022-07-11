/*CMD
  command: /brptp
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Input Nilai TP*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("tp", data.message, "text");
Bot.runCommand("/tglbrp");
