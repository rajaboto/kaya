/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Kata sandi*
  keyboard: 
  aliases: 
CMD*/

var msg = "Access denied. Password is: `123` /login"

if (message == "0858") {
  Bot.setProperty(
      "admin_chat",
       chat.chatid,
      "string"
  )

  msg = "login berhasil..!"
}

Bot.sendMessage(msg)
