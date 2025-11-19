// Type til en position på brættet
interface Position {
  x: number; // kolonne 1-8
  y: number; // række 1-8
}

// Funktion der tjekker om to dronninger kan slå hinanden
function kanDronningerSlåHverandre(p1: Position, p2: Position): boolean {
  // Samme række
  if (p1.y === p2.y) return true;

  // Samme kolonne
  if (p1.x === p2.x) return true;

  // Samme diagonal
  if (Math.abs(p1.x - p2.x) === Math.abs(p1.y - p2.y)) return true;

  return false; // Ingen trussel
}

// Eksempel på input fra brugeren
const input1: string | null = prompt(
  "Indtast første dronnings position (x,y) fx 1,5"
);
const input2: string | null = prompt(
  "Indtast anden dronnings position (x,y) fx 3,7"
);

if (input1 && input2) {
  const [x1, y1] = input1.split(",").map((n) => Number(n.trim()));
  const [x2, y2] = input2.split(",").map((n) => Number(n.trim()));

  const dronning1: Position = { x: x1, y: y1 };
  const dronning2: Position = { x: x2, y: y2 };

  if (kanDronningerSlåHverandre(dronning1, dronning2)) {
    console.log("Dronningerne kan slå hinanden!");
  } else {
    console.log("Dronningerne er sikre.");
  }
}
