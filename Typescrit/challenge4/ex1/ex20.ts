let t:number[]=[]
let n:number;
n =Number(prompt('saise la taille de tableau'))
while (n<=0) {
  n =Number(prompt('saise la taille de tableau'))
  
}


for (let i = 0; i < n; i++) {
  t[i]=Number(prompt("saise le contenu de tableau"))
  
}
let max=t[0]
let pos = 0
for (let i = 1; i < n; i++){
  if (t[i]>= max){
    max = t[i]
    pos = i
  }
 
}
console.log("le plus grand nombre de tableau est : "+max)
console.log("la postion de "+max+" est  "+pos)