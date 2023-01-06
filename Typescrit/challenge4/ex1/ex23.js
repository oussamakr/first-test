var puissance = 1;
var a = Number(prompt("saisie le nombre "));
var n = Number(prompt("saisie la puissance "));
for (var i = 0; i < n; i++) {
    puissance = puissance * a;
}
console.log(+a + ' a la puissance ' + n + ' est égale a ' + puissance);
