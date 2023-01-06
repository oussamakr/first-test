function occurence() {
  let oc:(any)[]=[]
 for (let i = 0; i < 26; i++) {
  oc[i]=0  
 }
 let ch=prompt('saisie un text') ||""
for (let index = 0; index < ch.length; index++) {
  let ch2=ch[index].toLocaleUpperCase()
  let O = ch2.charCodeAt(0)-65

  oc[O]=oc[O]+1 
}
console.log(oc)
}
occurence()







// let choc:string=""

// let min =0
// for (let i = 1; i < ch.length; i++) {
//     if (ch[min]==ch[i]){
//       choc += ch[i]
//   }
 
// }
// min++

