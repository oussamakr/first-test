
let n = Number(prompt("saisie la nombre des chianes"))
/* Checking if the value of `n` is between 4 and 12 and if it is even. */

while (((n < 4) || (n >= 12)) || (n % 2 != 0)) {
  
  n = Number(prompt("saisie la nombre des chianes"))
}
console.log("Les nombres des chaines est : "+n)
let t:string[]=[]
let tcod:string[]=[]

for (let i = 0; i < n; i++) {
 let ch=prompt("saise une chaine") || ""

 while ((ch.length<0)||(ch.length>6)) {
  ch=prompt("saisie une chaine compris entre 0 et 6")||""
 }
  t[i]= ch
}
console.log(t)

for (let i = 0; i < n; i++) {
  let ch2=""
  let ch=t[i]
  for (let index = 0; index < ch.length; index++) {
    if(ch[index]=="a" || ch[index]=="e"||ch[index]=="i"||ch[index]=="o"||ch[index]=="y"||ch[index]=="u"){
      ch2 += ch[index]+ch[index].charCodeAt(0)
    }
    else{ch2+=ch[index]}
    
  }
  tcod[i]=ch2
 
}
console.log(tcod)
