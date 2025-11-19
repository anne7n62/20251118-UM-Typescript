// Skriv et program der beder brugeren om input til at udfylde n objekter der gemmes i et array.
// Objekterne skal være af typen {navn, alder, aktiv}.
// Output derefter objekternes indhold på siden i formatet "navn er alder år gammel og aktiv/inaktiv".
// Brug passende typer alle steder.

/// Definer typen for et objekt
interface Person {
  navn: string;
  alder: number;
  aktiv: boolean;
}

// Array til at gemme alle personer
let personer: Person[] = [];

// Hent reference til output-element på siden
const output: HTMLElement | null = document.getElementById("output");

// Bed brugeren om hvor mange personer der skal indtastes
const nInput: string | null = prompt("Hvor mange personer vil du indtaste?");
const n: number = nInput ? Number(nInput) : 0;

// Loop n gange for at indsamle data
for (let i = 0; i < n; i++) {
  // Navn
  const navn: string = prompt(`Indtast navn på person ${i + 1}:`) || "";

  // Alder
  const alderInput: string | null = prompt(`Indtast alder på person ${i + 1}:`);
  const alder: number = alderInput ? Number(alderInput) : 0;

  // Aktiv (ja/nej)
  const aktivInput: string | null = prompt(`Er personen aktiv? (ja/nej)`);
  const aktiv: boolean = aktivInput?.toLowerCase() === "ja";

  // Opret objekt og læg i arrayet
  const person: Person = { navn, alder, aktiv };
  personer.push(person);
}

// Vis alle personer på siden
if (output) {
  output.innerHTML = ""; // ryd tidligere output
  for (const p of personer) {
    output.innerHTML += `${p.navn} er ${p.alder} år gammel og ${
      p.aktiv ? "aktiv" : "inaktiv"
    }<br>`;
  }
}
