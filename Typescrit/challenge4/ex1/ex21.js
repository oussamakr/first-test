var t = [];
var n;
n = Number(prompt('saisie le nombre des étudiants'));
while (n <= 0) {
    n = Number(prompt('saisie le nombre des étudiants'));
}
for (var i = 0; i < n; i++) {
    t[i] = Number(prompt("saise les moyennes des etudiants "));
}
console.log(t);
var somme = 0;
for (var i = 0; i < n; i++) {
    somme = t[i] + somme;
}
// console.log(somme)
var moy;
moy = somme / n;
var nombre = 0;
for (var i = 0; i < n; i++) {
    if (t[i] >= moy) {
        nombre++;
    }
}
console.log(+nombre + " étudiant(s) ont une moyenne supérrieure au moyenne de classe ");
