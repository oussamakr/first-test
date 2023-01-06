var ch = prompt("saisie une chaine") || "";
// let lettre=prompt("saisie une lettre") || ""
// let lettre=prompt("saisie une lettre")
var test = false;
var i = 0;
while ((i <= ch.length - 1) && (test == false)) {
    if (ch[i] == "e") {
        test = true;
    }
    i++;
}
if (test == true) {
    console.log("existe");
}
else {
    console.log("n'existe pas");
}
