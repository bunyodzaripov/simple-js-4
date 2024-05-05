let name = prompt("Istalgan so'z kiriting: ");

let newName = "";

let lastCharacter = name[name.length - 1];

if (lastCharacter === lastCharacter.toUpperCase()) {
   for (let i = 0; i < lastCharacter.length - 1; i++) {
      newName += name[i];
   }

   newName += lastCharacter.toLowerCase();
}
if (lastCharacter === lastCharacter.toLowerCase()) {
   for (let i = 0; i < lastCharacter.length - 1; i++) {
      newName += name[i];
   }

   newName += lastCharacter.toUpperCase();
}

document.write(name, "|", newName);
