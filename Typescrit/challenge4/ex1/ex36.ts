 let t:number[]=[]
 let ch = "jhjgjg"
 let ch2= ch.split("")
  let N=Number(prompt("saisie un entier "))
  let ind:any;
while (N<2 || N>20) {
  N=Number(prompt("saisie un entier selon les conditon de saisie"))
}
for (let i = 0; i < N; i++) {
 t[i]=Number(prompt("saisie la contenu de tab"))
}
let nb=0
let i=0
while ((i<t.length)&&(nb<1)) {
  if (t[i]%2==0){
    nb++ 
  }
  i++
}



for (let i = 0; i < N; i++) {
 if (t[i]%2==0){
  ind = i 
  break
 }
 }
console.log(t)
console.log("l'indce de premier nombre paire dan la liste est "+ind)

