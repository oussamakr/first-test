function pari(n) {
    do {
        if (a < 10) {
            // let a = Number(prompt('saise une nombre a'))
            return 'plas grand';
        }
        else if (a > 20) {
            // let a = Number(prompt('saise une nombre a'))
            return 'plus petit';
            var a_1 = Number(prompt('saise une nombre a'));
        }
        else {
            return 'dans intervalle';
        }
    } while ((a < 10) && (a > 20));
}
var a = Number(prompt('saisie un nombre'));
console.log(pari(a));
