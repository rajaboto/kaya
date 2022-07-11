/*CMD
  command: /qq
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Betting:

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("hrg", data.message, "text");
Bot.runCommand("/qq2");
