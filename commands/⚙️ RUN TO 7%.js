/*CMD
  command: ⚙️ RUN TO 7%
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

let money = Libs.ResourcesLib.userRes("money");
let cur_increment = money.growth.info().increment;
let new_increment = cur_increment + 0.7;
let secs_in_1440minutes = 60*1440

money.growth.addCompoundInterest({
  percent: 0.7,
  interval: secs_in_1440minutes
});
