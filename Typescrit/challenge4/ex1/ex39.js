var n = Number(prompt("saisie  la taille"));
var t = [];
var tp = [];
var tn = [];
while ((n < 5) || (n > 20)) {
    n = Number(prompt("saisie  la taille"));
}
for (var i = 0; i < n; i++) {
    t[i] = Number(prompt("saisie la contenu de tab"));
}
for (var i = 0; i < n; i++) {
    if (t[i] < 0) {
        tn[i] = t[i];
    }
    else {
        tp[i] = t[i];
    }
}
console.log("les nombres (-) sont dans le tableau  " + tn);
console.log("les nombres (+) sont dans le tableau  " + tp);
