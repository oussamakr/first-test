// methode 1
//  let ch=prompt("saisie une chaine a") || ""
// let ch1=''
// for (let i = 0; i < ch.length-1; i++) {
//   if (ch[i] !==" "){
//     ch1 += ch[i]
//   }
// }

//methode 2
// let ch=prompt("saisie une chaine a") || ""
// console.log( ch.replace(/\s/g,""))



//methode 3 (function )
// let ch=prompt("saisie une chaine") || ""
// function space(ch:string) {
//   return ch.replace(/\s/g,"")
// }
// console.log(space(ch))

//methode 4

let ch=prompt("saisie une chaine a") || ""
const space = ch => ch.split(' ').join('')
console.log(space(ch))

