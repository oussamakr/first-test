function incr(n) {
    var str;
    for (var i = 1; i <= 10; i++) {
        str = n + i;
        console.log(str);
    }
}
var n = Number(prompt('saise un nombre n'));
incr(n);
