function PGCD(a, b) {
    while (a != b) {
        if (a > b) {
            a = a - b;
        }
        else
            (b = b - a);
    }
    return a;
}
var a = Number(prompt("saisie un entier "));
var b = Number(prompt("saisie un entier "));
console.log("le PGCD de a et b   : " + PGCD(a, b));
