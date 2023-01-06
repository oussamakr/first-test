function prix(ht:number,n:number,tva:number):number{
  return ((n*ht)+((n*ht)*(tva/100)));
}
let n = Number (prompt('saisie les nombre des articles'));
let ht = Number (prompt('saisie le prix delarticle'));
let tva = Number (prompt('saisie le taux de tva'));

alert(prix(ht,n,tva))
console.log('l"article ' );

