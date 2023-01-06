// function saisie( ){
//   let a :number
//   do {  
//      a = Number(prompt('saisie un nombre'));
//  }
//  while((a<1  || a>3));
//  return 'les nombre est dans lintervalle'
  
// }
// function saisie2(n:number)
// {
  let n:number
  n= Number(prompt('donner une valeur plus petit que 3'))
  while(n>3 || n<1)
  {
if(n>3){
  alert('plus petit')
  n= Number(prompt('donner une valeur plus petit que 3'))
}
else{
  alert('plus grand')
  n= Number(prompt('donner une valeur plus grand que 1'))
}

  }
 console.log( ' réponse convienne le numero est dans intervalle ')

// }
//  let n = Number(prompt('donner une valeur'))
// console.log(saisie2(n))