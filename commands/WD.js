/*CMD
  command: WD
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

User.setProperty("pp", data.message, "text");

var tgID=data.user.telegramid;
if(data.user.telegramid!=508037619)
{
  Bot.sendMessage("❗*Minimal Penarikan Awal Rp3.700.000,-*");
  Bot.sendMessage("Hallo <nama>, Jika Ingin menarik saldo sebelum mencapai batas penarikan awal, silahkan lakukan deposit/titip dana sebesar dari jumlah kurang saldo penarikan awal, sehingga saldo anda mencapai batas penarikan awal sebesar Rp3.700.000,-");
  Bot.sendMessage("Minimal Penarikan seterusnya Rp25.000,-");
 return
 }
 if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("saldo tdk cukup!🥱");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("money");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("money", telegramid);
    
    if(res.have(amount)){
       if( res.transferTo(anotherRes, amount) ){
         Bot.sendMessage("Penarikan Rp" + amount + " BERHASIL mohon tunggu");
         Bot.runCommand("/pesanmember")
       }
     }else{
        Bot.sendMessage("❗Saldo tidak diketahui..😥");
     }
  }
}else{
  Bot.sendMessage("❗GAGAL, Format penarikan salah!")
}
