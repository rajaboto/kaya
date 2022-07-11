/*CMD
  command: /profils
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 

  <<ANSWER
📚 *Berikut Data Akun Bit10 anda :*

*Nama :* <nama>

*<bank> :* <norek>

*Whatsapp :* <wa>

✅ *KONFIRMASI* Jika Data Sudah Benar
  ANSWER
  keyboard: ✅ KONFIRMASI,❎ ULANGI
  aliases: 
CMD*/

if(data.message=="✅ KONFIRMASI"){
   Bot.runCommand("/profill");
   Bot.sendKeyboard("👤 MY ACCOUNT\n📈 JOIN VIP BSF,💬 SUPPORT\n🏦 WITHDRAW,💰 TITIP DANA", "*Registrasi Berhasil*.. Selamat Bergabung!");
}else{
  Bot.runCommand("/bitreg2");
}
