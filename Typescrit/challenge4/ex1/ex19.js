var t1 = [1, 2, 3];
var t2 = [0, 1];
var i, j;
var schumf = 0;
for (var i_1 = 0; i_1 < t1.length; i_1++) {
    for (var j_1 = 0; j_1 < t2.length; j_1++) {
        schumf = schumf + (t1[i_1] * t2[j_1]);
    }
}
console.log("Le Schtroumpf de deux tableau est : " + schumf);
