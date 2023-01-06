function som(n) {
    var i;
    var somm = 0;
    for (i = 1; i <= n; i++) {
        somm = somm + i;
    }
    console.log(somm);
}
var n = Number(prompt('saisie un nombre'));
console.log(som(n));
