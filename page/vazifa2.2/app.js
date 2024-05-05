let health = prompt("sog'likingiz qanaday holda?: ");

let funds = prompt("siznig budjutingiz qancha?: ");

if (health == "yaxshi" && funds == "yaxshi") {
   document.write("Sizning ahvolingiz va moddiy mablag'ingiz yaxshi");
} else if (health == " yaxshi" && funds == "yomon") {
   document.write(
      "Sizning ahvolingiz yaxshi, moddiy mablag'ingiz o'rtacha yana xarakat qilishdan to'xtamang"
   );
} else if (health == "yomon" && funds == "yaxshi") {
   document.write(
      "Sizning ahvolingiz yomon agar hohlasangiz biz sizga davolanishga yordam beramiz lekin moddiy mablag'ingiz yaxshi"
   );
} else if (health == "yomon" && funds == "yomon") {
   document.write(
      "Sizning ahvolingiz yomon, moddiy mablag'ingiz yomon va biz sizga dam olishga va davolanishga yordam beramiz"
   );
} else {
   document.write("Siz noto'g'ri javob kiritdingiz");
}
