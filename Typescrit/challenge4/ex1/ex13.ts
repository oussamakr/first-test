
function reche(){
  let T :number[]=[]

/* Declaring a variable `a` of type `number`. */
let a:number
let j:number

 

T[0]=Number(prompt('donner une valeur du tableau'))
let i = 0
while(  (T[i]!=0 )  ){
 i++
 T[i]=Number(prompt("saisie contenu de tab"))
 

}
return T
  }
console.log(reche())