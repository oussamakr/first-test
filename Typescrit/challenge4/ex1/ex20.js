var t = [];
var n;
n = Number(prompt('saise la taille de tableau'));
while (n <= 0) {
    n = Number(prompt('saise la taille de tableau'));
}
for (var i = 0; i < n; i++) {
    t[i] = Number(prompt("saise le contenu de tableau"));
}
var max = t[0];
var pos = 0;
for (var i = 1; i < n; i++) {
    if (t[i] >= max) {
        max = t[i];
        pos = i;
    }
}
console.log("le plus grand nombre de tableau est : " + max);
console.log("la postion de " + max + " est  " + pos);
