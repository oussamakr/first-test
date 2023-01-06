let n=Number(prompt("saisie  la taille"))
let t:number[]=[]
let tp:number[]=[]
let tn:number[]=[]

while ((n<5)||(n>20)) {
  n=Number(prompt("saisie  la taille"))
}

for (let i = 0; i < n; i++) {
 t[i]=Number(prompt("saisie la contenu de tab"))
  }

  for (let i = 0; i < n; i++) {
    if (t[i]<0){
      tn[i] = t[i]
    }
    else{
      tp[i]=t[i]
    }
    
  }
  console.log("les nombres (-) sont  "+tn)
  console.log("les nombres (+) sont  "+tp)