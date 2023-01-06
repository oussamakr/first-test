function reche() {
    var T = [];
    /* Declaring a variable `a` of type `number`. */
    var a;
    var j;
    var n = 5;
    T[0] = Number(prompt('donner une valeur du tableau'));
    var i = 0;
    while ((i < n) && (T[i] > 0)) {
        i++;
        T[i] = Number(prompt("saisie contenu de tab"));
    }
    return T;
}
console.log(reche());
