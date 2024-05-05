let sentence = prompt("Istalgan so'z kiriting: ").trim();
let count = 1;

for (let i = 0; i < sentence.length; i++) {
   if (sentence[i] === " ") {
      count++;
   }
}

document.write(count);
