var ch = prompt("saisie une chaine") || "";
while ((ch.length <= 0) || (ch.length > 15)) {
    ch = prompt("saisie une chaine") || "";
}
console.log(ch);
var chinv = "";
for (var i = ch.length - 1; i >= 0; i--) {
    chinv += ch[i];
}
console.log(chinv);
if (ch == chinv) {
    alert("la chaine est PALAINDROME");
}
else {
    alert("la chainen'est pas PALAINDROME");
}
