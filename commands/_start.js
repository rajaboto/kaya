/*CMD
  command: /start
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

var tgID=data.user.telegramid;
var firstName = data.user.first_name;
var lastName = data.user.last_name;
var userName = data.user.username;

function onAttracted(refUser){
  // access to Bonus Res of refUser
  Bot.sendMessageToChatWithId(
    refUser.telegramid,
    `*š§ New Referral You Got: ${bonus} ${bot.currency}*`
  )
  
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  refUserBonus.add(bonus);  // add 100 bonus for friend

  user.addBalance(bonus) //Upperline Add
}

Bot.sendKeyboard('š° MY FUNDS,š JOIN VIP BSF,š FREE TRIAL\nš² JOIN BIT10,š¬ SUPPORT', 'š *Bit Signal FX - Technical Analysis & Fundamental!*\n\n*Dapatkan Yang Terbaik!*š\n\nš¹ Signal harian Nyata\nš¹ Profit 99,99% Konsisten!\nš¹ up to 3000 pip 1 bulan\nš¹ Resiko rendah\nš¹ Signal Notifikasi Langsung!\nš¹ Support Semua Broker!\n\nš³ *Payment Method* ā½E-Wallet ā½ Bank Transfer');
