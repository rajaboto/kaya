/*CMD
  command: /hapussaldo
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
if(params){
  let arr = params.split(" ");
  
  let telegramid = arr[0];
  let amount = arr[1];  

  if(!arr[1]){
    Bot.sendMessage("saldo tdk cukup!🥱");
  }else{
    amount = parseFloat(amount);
    let res = Libs.ResourcesLib.userRes("bank_deposit");
    let anotherRes = Libs.ResourcesLib.anotherUserRes("bank_deposit", telegramid);
    
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
