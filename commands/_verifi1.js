/*CMD
  command: /verifi1
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 📔*Pilih Jangka Waktu Berlangganan*
  keyboard: Rp200.000 (1 Bulan),Rp1.680.000 (1 Tahun),🔙 Batal
  aliases: 
CMD*/

var tgID=data.user.telegramid;
User.setProperty("vip", data.message, "string");
if(data.message=="Rp1.680.000 (1 Tahun)"){
   Bot.sendMessage("💳 *1 Month VIP Payment Rp1.680.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 1 Tahun\n\n*Total Transfer* Rp1.680.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
 }
if(data.message=="Rp875.000 (7 bulan)"){
  Bot.sendMessage("💳 *2 Month VIP Payment Rp875.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 7 Bulan\n\n*Total Transfer* Rp875.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
if(data.message=="Rp200.000 (1 Bulan)"){
  Bot.sendMessage("💳 *5 Month VIP Payment Rp200.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 1 Bulan\n\n*Total Transfer* Rp200.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
if(data.message=="Rp385.000 (2 Bulan)"){
  Bot.sendMessage("💳 *1 Year VIP Payment Rp385.000,-*\n*--------------------------------------------------*\n📔ID: "+ tgID + " 🗓️ VIP 2 Bulan\n\n*Total Transfer* Rp385.000,-\n\n🔹Dana `085809548026`\n a.n Christof\n\n🔹Gopay `085809548026`\na.n Agustina\n\n🔹Bank Danamon `003636021408`\na.n Christof\n\n*----------------------------------------------------*\n_mohon segera /konfirmasi setelah transfer!_");
}
