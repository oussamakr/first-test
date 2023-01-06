function range(nom1, nom2, nom3) {
    if ((nom1 <= nom2) && (nom2 <= nom3)) {
        return 'les noms sont rangés dans lordre alphabétique';
    }
    else {
        return 'les non ne sont pas rangés dans lorde alphabétique';
    }
}
var nom1 = prompt('saise la prémiere nom 1') || '';
var nom2 = prompt('saise la prémiere nom 2') || '';
var nom3 = prompt('saise la prémiere nom 3') || '';
console.log(range(nom1, nom2, nom3));
