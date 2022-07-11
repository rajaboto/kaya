/*CMD
  command: /balas
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *tulis pesan...*

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
  Bot.sendMessage("Sorry. Bot have not admin now");
  return // exit
}

var user_link = Libs.commonLib.getLinkFor(user)

msg = "Member " + message + "/reply"+ user.telegramid;


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendMessage("Terkirim!.");
