/*CMD
  command: /profill
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👤 my account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");

let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");

Bot.sendKeyboard("👤 MY ACCOUNT\n📈 JOIN VIP BSF,💬 SUPPORT\n🏦 WITHDRAW,💰 TITIP DANA","🧿 *MY ACCOUNT PROFILE*\n----------------------------------------------\n\n👤 *Nama :* <nama>\n\n🎁 *Active Deposit :* Rp"+ money.value().toFixed(0) + ",-\n\n🏦 *Total Penarikan :* Rp" + bank_deposit.value().toFixed(0) + ",- \n\n*===========≠==========*\n\n💳 *Payment Bank Account*\n\n◽*Bank :* <bank>\n\n◽*Rekening :* `<norek>`\n\n*----------------------------------*");
Bot.runCommand("⚙️ RUN TO 7%")
