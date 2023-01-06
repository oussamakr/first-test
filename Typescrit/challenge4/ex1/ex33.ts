let ch=prompt("saisie un text ")||""
let ch1:number[]=[]
let espace =0
let nbr=0
let nbr2=0

for (let i = 0; i < ch.length; i++) {
  ch1[i]=ch[i].charCodeAt(0) 
}
for (let j = 0; j < ch1.length; j++) {
  if ((ch1[j] == 32  ) && (ch1[j+1] != ch1[j]) ){
    nbr++
  }
  else if (ch1[j] != 32   ){
    nbr2 = nbr+1

  }
}
console.log(ch1)
console.log("votre text contient des espace(debut ou fin )  "+nbr)
console.log("Votre text ne contien pas des espaces au début  "+nbr2)



// console.log("le nombre des espacesest "+espace)
// console.log("le nombre des mots est "+nbr)