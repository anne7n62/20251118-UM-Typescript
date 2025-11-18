function countE(str: string) {
  let count: number = 0;

  //hver gang vi finder et "e" øger vi tælleren
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "e") {
      count++;
    }
  }

  return count;
}

const modtagStreng: string = "hej med dig";
console.log(countE(modtagStreng));
