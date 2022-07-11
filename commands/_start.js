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
    `*🏧 New Referral You Got: ${bonus} ${bot.currency}*`
  )
  
  let refUserBonus = Libs.ResourcesLib.anotherUserRes("balance", refUser.telegramid);
  refUserBonus.add(bonus);  // add 100 bonus for friend

  user.addBalance(bonus) //Upperline Add
}

Bot.sendKeyboard('💰 MY FUNDS,📈 JOIN VIP BSF,📉 FREE TRIAL\n💲 JOIN BIT10,💬 SUPPORT', '📊 *Bit Signal FX - Technical Analysis & Fundamental!*\n\n*Dapatkan Yang Terbaik!*👇\n\n🔹 Signal harian Nyata\n🔹 Profit 99,99% Konsisten!\n🔹 up to 3000 pip 1 bulan\n🔹 Resiko rendah\n🔹 Signal Notifikasi Langsung!\n🔹 Support Semua Broker!\n\n💳 *Payment Method* ◽E-Wallet ◽ Bank Transfer');
