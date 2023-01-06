var t = [];
var N = Number(prompt("saisie un entier "));
var ind;
while (N < 2 || N > 20) {
    N = Number(prompt("saisie un entier selon les conditon de saisie"));
}
for (var i = 0; i < N; i++) {
    t[i] = Number(prompt("saisie la contenu de tab"));
}
for (var i = 0; i < N; i++) {
    if (t[i] % 2 == 0) {
        ind = i;
        break;
    }
}
console.log(t);
console.log("l'indce de premier nombre paire dan la liste est " + ind);
