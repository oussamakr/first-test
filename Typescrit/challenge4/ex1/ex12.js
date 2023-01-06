var t = new Array();
var i;
var j;
function rech() {
    for (j = 0; j < 5; j++) {
        var a = Number(prompt('saisi'));
        t.push(a);
    }
    var A = 0;
    var pos = 0;
    for (j = 0; j < 5; j++) {
        if (t[j] >= A) {
            A = t[j];
            pos = j + 1;
        }
    }
    console.log(t);
    console.log("le nombre le plus grand est", A, "saisie dans la postion", pos);
}
console.log(rech());
