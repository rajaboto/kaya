/*CMD
  command: /adminbonus1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: ok

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

let rnd = Libs.Random; 

let money = Libs.ResourcesLib.userRes("bank_deposit");
let amount = rnd.randomFloat(10000000000, 10000000000000) 
money.add(amount);
Bot.runCommand("/profill");
