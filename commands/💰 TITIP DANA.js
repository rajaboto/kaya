/*CMD
  command: 💰 TITIP DANA
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 💳 *Nominal* _(minimal Rp10000,-)_

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

User.setProperty("nominal", data.message, "string"); 
var number = parseInt(message)
if (!number) {
  Bot.sendMessage("❗format salah, coba lagi..")
  return
}
Bot.runCommand('/ttpdana2');
