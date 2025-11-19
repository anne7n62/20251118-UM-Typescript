// Skriv et program der beder brugeren om input til at udfylde n objekter der gemmes i et array.
// Objekterne skal være af typen {navn, alder, aktiv}.
// Output derefter objekternes indhold på siden i formatet "navn er alder år gammel og aktiv/inaktiv".
// Brug passende typer alle steder.
// Array til at gemme alle personer
var personer = [];
// Hent reference til output-element på siden
var output = document.getElementById("output");
// Bed brugeren om hvor mange personer der skal indtastes
var nInput = prompt("Hvor mange personer vil du indtaste?");
var n = nInput ? Number(nInput) : 0;
// Loop n gange for at indsamle data
for (var i = 0; i < n; i++) {
    // Navn
    var navn = prompt("Indtast navn p\u00E5 person ".concat(i + 1, ":")) || "";
    // Alder
    var alderInput = prompt("Indtast alder p\u00E5 person ".concat(i + 1, ":"));
    var alder = alderInput ? Number(alderInput) : 0;
    // Aktiv (ja/nej)
    var aktivInput = prompt("Er personen aktiv? (ja/nej)");
    var aktiv = (aktivInput === null || aktivInput === void 0 ? void 0 : aktivInput.toLowerCase()) === "ja";
    // Opret objekt og læg i arrayet
    var person = { navn: navn, alder: alder, aktiv: aktiv };
    personer.push(person);
}
// Vis alle personer på siden
if (output) {
    output.innerHTML = ""; // ryd tidligere output
    for (var _i = 0, personer_1 = personer; _i < personer_1.length; _i++) {
        var p = personer_1[_i];
        output.innerHTML += "".concat(p.navn, " er ").concat(p.alder, " \u00E5r gammel og ").concat(p.aktiv ? "aktiv" : "inaktiv", "<br>");
    }
}
