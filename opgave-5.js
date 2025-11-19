// Lav en tuple med tilhørende enum der indeholder info om en person
// så som navn, alder og postnummer
let PersonFelt;
(function (PersonFelt) {
  PersonFelt[(PersonFelt["Navn"] = 0)] = "Navn";
  PersonFelt[(PersonFelt["Alder"] = 1)] = "Alder";
  PersonFelt[(PersonFelt["Postnummer"] = 2)] = "Postnummer";
})(PersonFelt || (PersonFelt = {}));
// Tuple: et array, hvor elementerne er defineret enkeltvis
let personTuple = ["Anne", 28, 8000];
// Brug enum som indeks / opremsning
let personNavn = personTuple[PersonFelt.Navn];
console.log(personNavn); // Output: Anne
