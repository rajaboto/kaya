/*CMD
  command: /pesanmember
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

// Automatic fix
var msg;

// Automatic fix
var msg;

var admin_chat = Bot.getProperty("admin_chat");

if(!admin_chat){
  Bot.sendMessage("Maaf, admin sedang offline!");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "WD <bank> <norek> <pp> \n/reply"+ user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/
