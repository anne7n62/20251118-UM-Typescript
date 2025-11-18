let canvas: HTMLCanvasElement,
  xMax: number,
  yMax: number,
  gammeltLiv: boolean[][],
  nytLiv: boolean[][],
  ctx: CanvasRenderingContext2D;
const størrelse: number = 5,
  dækning: number = 5;
window.onload = function () {
  canvas = document.getElementById("myCanvas") as HTMLCanvasElement;
  ctx = canvas.getContext("2d");
  xMax = Math.floor(canvas.width / størrelse);
  yMax = Math.floor(canvas.height / størrelse);
  init();
  setInterval(gameOfLife, 50);
};
function randBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function levende(x: number, y: number) {
  let e = 0;
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (gammeltLiv[i][j]) ++e;
    }
  }
  if (gammeltLiv[x][y]) --e;
  return e;
}
function init() {
  gammeltLiv = new Array(xMax + 1);
  nytLiv = new Array(xMax + 1);
  for (let x = 0; x <= xMax + 1; x++) {
    gammeltLiv[x] = new Array(yMax + 1);
    nytLiv[x] = new Array(yMax + 1);
    for (let y = 0; y <= yMax + 1; y++) {
      nytLiv[x][y] = false;
      gammeltLiv[x][y] = false;
    }
  }
  for (let i = 1; i <= (xMax * yMax) / dækning; i++) {
    nytLiv[randBetween(1, xMax)][randBetween(1, yMax)] = true;
  }
}
function vis() {
  for (let x = 1; x <= xMax; x++) {
    for (let y = 1; y <= yMax; y++) {
      if (gammeltLiv[x][y] != nytLiv[x][y]) {
        gammeltLiv[x][y] = nytLiv[x][y];
        if (gammeltLiv[x][y]) ctx.fillStyle = "red";
        else ctx.fillStyle = "green";
        ctx.fillRect(x * størrelse, y * størrelse, størrelse, størrelse);
      }
    }
  }
}
function gameOfLife() {
  vis();
  for (let x = 1; x <= xMax; x++) {
    for (let y = 1; y <= yMax; y++) {
      let e = levende(x, y);
      if (gammeltLiv[x][y]) nytLiv[x][y] = e >= 2 && e <= 3;
      else nytLiv[x][y] = e === 3;
    }
  }
}
