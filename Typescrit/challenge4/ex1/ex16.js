var t = [];
var n = Number(prompt('donner la taille du tableau'));
for (var i = 0; i < n; i++) {
    t[i] = Number(prompt('saise un nombre'));
}
var p = 0;
var ng = 0;
for (var i = 0; i < n; i++) {
    if (t[i] < 0) {
        p++;
    }
    else {
        ng++;
    }
}
console.log('le nombre des cases positif est ', p);
console.log('le nombre des cases négatifs est ', ng);
