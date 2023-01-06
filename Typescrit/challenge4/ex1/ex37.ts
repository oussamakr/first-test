function PGCD(a:number,b:number) {
while (a != b) {
 if (a>b){ 
  a= a - b 
 }
 else (b = b -a)
 }
return a
}
let a=Number(prompt("saisie un entier "))
let b=Number(prompt("saisie un entier "))
console.log("le PGCD de a et b   : "+PGCD(a,b))