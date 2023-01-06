let puissance = 1
let a=Number(prompt("saisie le nombre "))
let n=Number(prompt("saisie la puissance "))

for (let i = 0; i < n; i++) {
  puissance = puissance * a
  
}
console.log(+a+' a la puissance '+n+' est égale a '+puissance)