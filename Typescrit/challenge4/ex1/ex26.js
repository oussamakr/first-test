var t = [];
t = [1, 3, 5, 6, 8, 3, 3, 2,];
console.log(t);
var a = Number(prompt("saise un nombre"));
var nbr = 0;
for (var i = 0; i < t.length; i++) {
    if (t[i] == a) {
        nbr++;
    }
}
if (nbr > 0) {
    console.log(+a + "  est occurence dans le tableau avec " + nbr + " fois");
}
else {
    console.log("y'a pas d'occurence");
}
