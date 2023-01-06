var n1 = Number(prompt('saisie la taille de arr1'));
var n2 = Number(prompt('saisie la taille de arr2'));
var k;
if (n1 < n2) {
    k = n2;
}
else {
    k = n1;
}
var arr1 = [];
for (var i = 0; i <= n1 - 1; i++) {
    arr1[i] = Number(prompt("saisie le conteni de arr1"));
}
var arr2 = [];
for (var j = 0; j <= n2 - 1; j++) {
    arr2[j] = Number(prompt("saisie le conteni de arr2"));
}
console.log(arr1);
console.log(arr2);
console.log(k);
var t = [];
for (var r = 0; r < k; r++) {
    for (var e = 0; e <= 1; e++) {
        if (arr1[e] < arr2[e]) {
        }
    }
}
