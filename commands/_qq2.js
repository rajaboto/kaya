/*CMD
  command: /qq2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Harga

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgID=data.user.telegramid;
User.setProperty("hrg", data.message, "text");
Bot.sendMessageToChatWithId(tgid, message + message)
Bot.runCommand("/reply"+ tgid + " ");
