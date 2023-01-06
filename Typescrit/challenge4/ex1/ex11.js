function fact(n) {
    var factt = 1;
    var i;
    for (i = 2; i < n + 1; i++) {
        factt = factt * i;
    }
    return factt;
}
var n = Number(prompt('saisie un nombre'));
console.log(fact(n));
