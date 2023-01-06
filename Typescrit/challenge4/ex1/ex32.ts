 let ch2:number[]=[]
 let ch3:number []=[]
let ch=prompt("saisie une chaine") || ""
let nbr=0
for (let i = 0; i < ch.length; i++) {
  ch2[i]= ch[i].charCodeAt(0)
  console.log(ch[i].charCodeAt(0));
    if(ch2[i]>= 97  && ch2[i]<=122){
        nbr++
  }
  else {nbr = nbr}
}
console.log(ch2)
console.log(nbr)

