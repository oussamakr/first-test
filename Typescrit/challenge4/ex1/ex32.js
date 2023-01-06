var ch2 = [];
var ch3 = [];
var ch = prompt("saisie une chaine") || "";
var nbr = 0;
for (var i = 0; i < ch.length; i++) {
    ch2[i] = ch[i].charCodeAt(0);
    // console.log(typeof(ch2))
    console.log(ch[i].charCodeAt(0));
    if (ch2[i] >= 97 && ch2[i] <= 122) {
        nbr++;
    }
    else {
        nbr = nbr;
    }
}
console.log(ch2);
console.log(nbr);
