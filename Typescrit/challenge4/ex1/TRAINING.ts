let N=Number(prompt("saisie les nombres des chaines"))
while ( (N<=4) || (N>=21)  || (N%2!=0) ) {
  N=Number(prompt("saisie les nombres des chaines"))
}
console.log(N)
let ch:string
let t:string[]=[]
for (let i = 0; i < N; i++) {
  let ch=prompt("saisie des chaines")||""
  while ((ch.length<=0)  || (ch.length>6)) {
    ch=prompt("saisie des chaines")||""
  }
 
   t[i] = ch
 
   console.log(ch)
}
// console.log(t)


let tcod:string[]= []
for (let i = 0; i < t.length; i++) {
  let ch1=""
  ch = t[i]
  for (let j = 0; j < ch.length; j++) {

    if (ch[j]=="o"  || ch[j]=="i"){
      ch1 += ch[j] + ch[j].charCodeAt(0)
    }
    else {ch1+=ch[j]}
  }
  tcod[i] = ch1

  
}
console.log(tcod)