// Funktion der laver en tekst om til akronym
function lavAkronym(sætning: string): string {
  // Split sætningen op i ord (ved mellemrum)
  const ord: string[] = sætning.split(" ");

  // Tag første bogstav fra hvert ord og gør det til stort
  const førsteBogstaver: string[] = ord.map((ord) => ord[0].toUpperCase());

  // Sæt alle bogstaver sammen til én streng
  const akronym: string = førsteBogstaver.join("");

  return akronym;
}

// Eksempler
const sætning1: string = "portable network graphics";
const sætning2: string = "Burlington Northern Santa Fe";
const sætning3: string = "Maneuvering Characteristics Augmentation System";

// Udskriv resultat
console.log(lavAkronym(sætning1)); // PNG
console.log(lavAkronym(sætning2)); // BNSF
console.log(lavAkronym(sætning3)); // MCAS

// Valgfrit: bed bruger om input via prompt
const input: string | null = prompt(
  "Indtast en sætning for at lave et akronym:"
);
if (input) {
  console.log(lavAkronym(input));
}
