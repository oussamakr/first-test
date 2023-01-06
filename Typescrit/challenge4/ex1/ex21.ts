let t:number[]=[]
let n:number;
n=Number(prompt('saisie le nombre des étudiants'))

while (n<=0) {
  n = Number(prompt('saisie le nombre des étudiants'));
  
}

for (let i = 0; i <n; i++){
  t[i]=Number(prompt("saise les moyennes des etudiants "))
  
}
console.log(t)

let somme=0
for (let i = 0; i < n; i++) {
  somme = t[i]+somme
  
}
// console.log(somme)
let moy:number;
moy = somme / n;
let nombre=0
for (let i = 0; i < n; i++) {
 if (t[i]>= moy){
  nombre++

 }
  
}
console.log(+nombre+" étudiant(s) ont une moyenne supérrieure au moyenne de classe ")
