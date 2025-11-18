//Lav en side der lægger to tal sammen aritmetisk og skriver resultatet ud på siden. Siden skal bede brugeren om to tal vha. prompt(). Brug passende typer alle steder.
// Funktion der lægger to tal sammen
function lægSammen(n1: number, n2: number): number {
  return n1 + n2;
}

// Hent input fra brugeren via prompt
const input1: string | null = prompt("Indtast det første tal:");
const input2: string | null = prompt("Indtast det andet tal:");

// Tjek at input ikke er null
if (input1 !== null && input2 !== null) {
  // Konverter string til number
  const tal1: number = parseFloat(input1);
  const tal2: number = parseFloat(input2);

  // Læg sammen
  const resultat: number = lægSammen(tal1, tal2);

  // Skriv resultatet ud på siden
  const output: HTMLElement | null = document.getElementById("resultat");
  if (output) {
    output.textContent = `Resultatet af ${tal1} + ${tal2} = ${resultat}`;
  }
} else {
  alert("Du skal indtaste begge tal!");
}
