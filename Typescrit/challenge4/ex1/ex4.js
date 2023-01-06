function paritedeproduit(a, b) {
    if ((a < 0) && (b > 0) || (a > 0) && (b < 0)) {
        return ' le produits est négatif';
    }
    else if ((a < 0 && b < 0) || ((a > 0 && b > 0))) {
        return ' le prosuits est positif';
    }
    else if ((a == 0 || b == 0)) {
        return ' le produits est null';
    }
}
var a = Number(prompt('saisie un entier '));
var b = Number(prompt('saisie un entier '));
console.log(paritedeproduit(a, b));
