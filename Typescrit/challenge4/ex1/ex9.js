function multi(n) {
    var mult;
    var i;
    for (i = 1; i < 16; i++) {
        mult = n * i;
        console.log(n, "*", i, "=", mult);
    }
}
var n = Number(prompt('saise un nombre'));
console.log(multi(n));
