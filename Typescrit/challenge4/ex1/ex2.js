function prix(ht, n, tva) {
    return ((n * ht) + ((n * ht) * (tva / 100)));
}
var n = Number(prompt('saisie les nombre des articles'));
var ht = Number(prompt('saisie le prix delarticle'));
var tva = Number(prompt('saisie le taux de tva'));
console.log(prix(ht, n, tva));
