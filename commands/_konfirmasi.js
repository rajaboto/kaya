/*CMD
  command: /konfirmasi
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 🏦 *Nama Bank Tujuan Transfer?*
  keyboard: 
  aliases: 
CMD*/

User.setProperty("bank", data.message, "text");
Bot.runCommand('/konfirmasi2');
