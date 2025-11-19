//Lav en side der lægger to tal sammen aritmetisk og skriver resultatet ud på siden. Siden skal bede brugeren om to tal vha. prompt(). Brug passende typer alle steder.
// Funktion der lægger to tal sammen
function lægSammen(n1, n2) {
  return n1 + n2;
}

// Hent input fra brugeren via prompt
const input1 = prompt("Indtast det første tal:");
const input2 = prompt("Indtast det andet tal:");
// Tjek at input ikke er null
if (input1 !== null && input2 !== null) {
  // Konverter string til number
  const tal1 = parseFloat(input1);
  const tal2 = parseFloat(input2);
  // Læg sammen
  const resultat = lægSammen(tal1, tal2);
  // Skriv resultatet ud på siden
  const output = document.getElementById("resultat");
  if (output) {
    output.textContent = `Resultatet af ${tal1} + ${tal2} = ${resultat}`;
  }
} else {
  alert("Du skal indtaste begge tal!");
}
// prompt() spørger brugeren om to tal.
// Input konverteres fra string til number med parseFloat.
// Funktion lægSammen lægger tallene sammen.
// Resultatet skrives til et HTML-element med id="resultat".
// Alle variabler har passende TypeScript-typer: string | null, number, HTMLElement | null.
