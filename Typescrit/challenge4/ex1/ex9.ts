function multi(n:number){
let mult:number;

for (let i = 0; i <=10; i++) {
  mult = n * i 
  console.log(n," * ",i," = ",mult)
  
}
}
let n=Number(prompt('saise un nombre'))
console.log(multi(n))