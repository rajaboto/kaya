/*CMD
  command: /adminReplyNews
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Pesan Pribadi
  keyboard: 
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = " " + message + " ";
Bot.sendMessageToChatWithId(tgid, msg);
Bot.sendMessage("Terkirim!")
