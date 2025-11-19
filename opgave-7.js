// Lav en funktion der tager et vilkårligt antal strenge som parametre
// og returnerer den korteste af strengene
function kortesteStreng(...strenge) {
    if (strenge.length === 0) {
        return ""; // eller throw Error, alt efter hvad I vil have
    }
    let korteste = strenge[0];
    //gennemløber argumenter og sammenligner længde
    for (const s of strenge) {
        if (s.length < korteste.length) {
            korteste = s;
        }
    }
    return korteste;
}
// Eksempel:
console.log(kortesteStreng("hej", "a", "blomst", "hus")); // "a"
