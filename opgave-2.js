function countE(str) {
    var count = 0;
    //hver gang vi finder et "e" øger vi tælleren
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "e") {
            count++;
        }
    }
    return count;
}
var modtagStreng = "hej med dig";
console.log(countE(modtagStreng));
