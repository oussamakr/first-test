var ch = prompt('saisie une chaine') || '';
var ch1 = '';
for (var i = ch.length - 1; i >= 0; i--) {
    ch1 = ch1 + ch[i];
}
console.log(ch1);
