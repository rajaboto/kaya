/*CMD
  command: /profils
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
š *Berikut Data Akun Bit10 anda :*

*Nama :* <nama>

*<bank> :* <norek>

*Whatsapp :* <wa>

ā *KONFIRMASI* Jika Data Sudah Benar
  ANSWER
  keyboard: ā KONFIRMASI,ā ULANGI
  aliases: 
CMD*/

if(data.message=="ā KONFIRMASI"){
   Bot.runCommand("/profill");
   Bot.sendKeyboard("š¤ MY ACCOUNT\nš JOIN VIP BSF,š¬ SUPPORT\nš¦ WITHDRAW,š° TITIP DANA", "*Registrasi Berhasil*.. Selamat Bergabung!");
}else{
  Bot.runCommand("/bitreg2");
}
