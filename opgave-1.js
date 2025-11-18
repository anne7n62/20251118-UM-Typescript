// Lav en funktion der tæller hvor mange gange bogstavet e forekommer i en streng som funktionen modtager som parameter.

function countE(str) {
  let count = 0;

  //hver gang vi finder et "e" øger vi tælleren
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      count++;
    }
  }

  return count;
}

let modtagStreng = "hej med dig";
console.log(countE(modtagStreng)); // Output: 2
