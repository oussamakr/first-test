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
var str = prompt('saisie une chaine') || '';
var i = 0;
while (str[i].charCodeAt(0) < 97 || str[i].charCodeAt(0) > 122) {
    str = prompt('saisie une chaine') || '';
}
i++;
console.log(str);
var strinv;
strinv = '';
var k = Number(prompt('saisie un entier '));
// console.log(PGCD(str[0].charCodeAt(0),k))
var j = 0;
while (j < str.length || PGCD(str[j].charCodeAt(0), k) != 1) {
    strinv += str[j].toLocaleUpperCase();
    j++;
}
console.log(strinv);
