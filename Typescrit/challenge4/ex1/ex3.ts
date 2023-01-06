
function retour(n:number){
  if (n<0){
   
    return 'le nombre ' + n + ' est négatif'
  }
  else if (n>0){
    return 'le nombre '  + n +  ' est positif'
  }
  else {
    return ' les nombre saisie est zéro'
  }
 

}

 let n = Number(prompt('saise une entier '))

console.log(retour(n))