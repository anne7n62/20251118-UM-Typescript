// Lav en funktion der beregner det geometriske gennemsnit af et vilkårligt antal tal

// bruger restparametre - kan tage vilkårligt antal værdier
function geoGennemsnit(...tal: number[]): number {
  let produkt = 1;

  //gang elementer sammen
  for (const t of tal) {
    produkt *= t;
  }

  //math.pow tager roden // retunere tallet
  return Math.pow(produkt, 1 / tal.length);
}

// eksempel
console.log(geoGennemsnit(2, 8)); // 4
