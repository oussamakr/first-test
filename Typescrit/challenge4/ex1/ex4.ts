function paritedeproduit(a:number,b:number){
  if (( a<0) && (b>0 ) || (a>0) && (b<0)){
    return ' le produits est négatif'
  }
  else if ((a<0 && b<0) || ((a>0  && b>0))){
    return ' le prosuits est positif'
  }
  else if ( ( a == 0  ||  b == 0 ))
    {
    return ' le produits est null'
  }
 
}

let a = Number(prompt('saisie un entier '))
let b = Number(prompt('saisie un entier '))

console.log(paritedeproduit(a,b))