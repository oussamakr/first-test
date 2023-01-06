let t: string[] = []
let tv: string[] = []
let tc: string[] = []

let n = Number(prompt("saisie la taille "))
while (n <= 0) {
  n = Number(prompt("saisie la taille "))
}


for (let i = 0; i < n; i++) {
  t[i] = prompt("saisie la contenu de tableau") || ""
}
let j=0
let k=0
let i=0

while (i<t.length) {

  if (t[i] == "a" || t[i] == "e" || t[i] == "i" || t[i] == "o" || t[i] == "y" || t[i] == "u") {
    tv[j] = t[i]
    j++
    i++}
    
    else {
      tc[k] = t[i]
      k++
      i++
  }
}











// for (let i = 0; i < n; i++) {

//   if (t[i] == "a" || t[i] == "e" || t[i] == "i" || t[i] == "o" || t[i] == "y" || t[i] == "u") {
//       tv[j] = t[i]
//       j++
//   }
//   else {
//       tc[k] = t[i]
//       k++
//   }

// }

console.log("les lettres voyelles sont  : " + tv)
console.log("les lettres consonne sont  : " + tc)
