// Lav en tuple med tilhørende enum der indeholder info om en person
// så som navn, alder og postnummer

enum PersonFelt {
  Navn,
  Alder,
  Postnummer,
}

// Tuple: et array, hvor elementerne er defineret enkeltvis
let personTuple: [string, number, number] = ["Anne", 28, 8000];

// Brug enum som indeks / opremsning
let personNavn = personTuple[PersonFelt.Navn];
console.log(personNavn); // Output: Anne
