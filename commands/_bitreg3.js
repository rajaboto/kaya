/*CMD
  command: /bitreg3
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
👤*Nama Lengkap :*
_wajib sesuai nama di buku tabungan_
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nama", data.message, "text");
var number = parseInt(message)
if (number) {
  Bot.sendMessage("❗format salah!")
  return
}
Bot.runCommand("/bitreg4");
