var n = prompt("saise un entier") || "";
while (n.length < 1) {
    n = prompt("saise un entier") || "";
}
console.log(n);
var chif = prompt("saise un  autre entier") || "";
while (chif.length < 1) {
    n = prompt("saise un entier") || "";
}
console.log(chif);
var t = [];
for (var i = 0; i < n.length; i++) {
    t[i] = chif;
    if (n[i] == t[0]) {
        for (var index = 1; index < t.length; index++) {
            if (n[i + 1] == t[i]) {
                console.log("le numbero existe dans la postion " + i);
            }
            else {
                console.log("le numero n'existe pas");
            }
        }
    }
}
