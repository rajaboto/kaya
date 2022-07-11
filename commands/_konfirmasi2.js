/*CMD
  command: /konfirmasi2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💳 *Nama Pengirim?*

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var firstName = data.user.first_name;
User.setProperty("nama", data.message, "text");
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

msg = "🏆REG  <nama> <bank>\n<vip>\nTitip dana <nominal>` " + user.telegramid + "` ";


Bot.sendMessageToChatWithId(
  admin_chat, msg
);

/*
Api.forwardMessage({ 
 chat_id: admin_chat,
 message_id: request.message_id
});
*/

Bot.sendKeyboard(",📈 JOIN VIP BSF,📉 FREE TRIAL\n👥 REFERRAL,💬 SUPPORT", "*Konfirmasi pembayaran berhasil..!*");
