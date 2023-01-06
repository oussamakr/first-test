
function rech(){
let T :number[]= []
let i:number
let j:number
let n = Number(prompt('donner la taille du tableau'))


for (j = 0; j < n; j++){ 
    T[j]=Number(prompt('saisi les valeurs du tableau'))
  }
let max = T[0];
let pos = 0 ;
for (let index = 1; index < T.length; index++) {
 
  if (max<=T[index]) {
    max = T[index]
    pos = index
  }
  
}
  
  console.log(T)
console.log("le nombre le plus grand est",max,"saisie dans la postion",pos, )

}
console.log(rech())

   
  
