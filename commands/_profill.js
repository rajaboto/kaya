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
  aliases: š¤ my account
CMD*/

let money = Libs.ResourcesLib.userRes("money");
let wood = Libs.ResourcesLib.userRes("wood");
let crystals = Libs.ResourcesLib.chatRes("crystals");

let bank_deposit = Libs.ResourcesLib.userRes("bank_deposit");

let bank_deposit2 = Libs.ResourcesLib.userRes("bank_deposit2");

Bot.sendKeyboard("š¤ MY ACCOUNT\nš JOIN VIP BSF,š¬ SUPPORT\nš¦ WITHDRAW,š° TITIP DANA","š§æ *MY ACCOUNT PROFILE*\n----------------------------------------------\n\nš¤ *Nama :* <nama>\n\nš *Active Deposit :* Rp"+ money.value().toFixed(0) + ",-\n\nš¦ *Total Penarikan :* Rp" + bank_deposit.value().toFixed(0) + ",- \n\n*===========ā ==========*\n\nš³ *Payment Bank Account*\n\nā½*Bank :* <bank>\n\nā½*Rekening :* `<norek>`\n\n*----------------------------------*");
Bot.runCommand("āļø RUN TO 7%")
