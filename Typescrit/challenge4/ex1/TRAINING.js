var N = Number(prompt("saisie les nombres des chaines"));
while ((N <= 4) || (N >= 21) || (N % 2 != 0)) {
    N = Number(prompt("saisie les nombres des chaines"));
}
console.log(N);
var ch;
var t = [];
for (var i = 0; i < N; i++) {
    var ch_1 = prompt("saisie des chaines") || "";
    while ((ch_1.length <= 0) || (ch_1.length > 6)) {
        ch_1 = prompt("saisie des chaines") || "";
    }
    t[i] = ch_1;
    console.log(ch_1);
}
// console.log(t)
var tcod = [];
for (var i = 0; i < t.length; i++) {
    var ch1 = "";
    ch = t[i];
    for (var j = 0; j < ch.length; j++) {
        if (ch[j] == "o" || ch[j] == "i") {
            ch1 += ch[j] + ch[j].charCodeAt(0);
        }
        else {
            ch1 += ch[j];
        }
    }
    tcod[i] = ch1;
}
console.log(tcod);
