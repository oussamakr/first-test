var a;
function retour(n) {
    if (n < 0) {
        return 'le nombre ' + n + ' est négatif';
    }
    else if (n > 0) {
        return 'le nombre ' + n + ' est positif';
    }
    else if (n == 0) {
        return ' les nombre saisie est zéro';
    }
}
var n = Number(prompt('saise une entier '));
console.log(retour(n));
