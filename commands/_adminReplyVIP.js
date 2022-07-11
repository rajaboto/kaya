/*CMD
  command: /adminReplyVIP
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var tgid = options.tgid;

var msg = "📊 *New Signal*\n\n<uang>\n\nSL `<sl>`\nTP `<tp>`\n\n_Signal Vip <tglbrp>_";
Bot.sendMessageToChatWithId(1217304482, msg);
Bot.sendMessageToChatWithId(5080376190, msg);
Bot.sendMessage("Signal VIP Terkirim!")
