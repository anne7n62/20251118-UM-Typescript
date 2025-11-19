// Lav en funktion der beregner det geometriske gennemsnit af et vilkårligt antal tal
// bruger restparametre - kan tage vilkårligt antal værdier
function geoGennemsnit() {
    var tal = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        tal[_i] = arguments[_i];
    }
    var produkt = 1;
    //gang elementer sammen
    for (var _a = 0, tal_1 = tal; _a < tal_1.length; _a++) {
        var t = tal_1[_a];
        produkt *= t;
    }
    //math.pow tager roden // retunere tallet
    return Math.pow(produkt, 1 / tal.length);
}
// eksempel
console.log(geoGennemsnit(2, 8)); // 4
