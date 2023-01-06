let n1=Number(prompt('saisie la taille de arr1'))
let n2=Number(prompt('saisie la taille de arr2'))
let k:number


if (n1<n2){
  k = n2
}
else {
  k = n1
}

let arr1:number[]=[]
for (let i = 0; i <= n1-1; i++) {
    arr1[i]=Number(prompt("saisie le conteni de arr1"))
}
let arr2:number[]=[]
for (let j = 0; j <= n2-1; j++) {
   arr2[j]=Number(prompt("saisie le conteni de arr2"))
}

console.log(arr1)
console.log(arr2)
console.log(k)
let t:number[]=[]

for (let r = 0; r < k; r++) {
  for (let e = 0; e <=1 ; e++) {
    if(arr1[e]<arr2[e]){
       
    }
 
  }
  
}