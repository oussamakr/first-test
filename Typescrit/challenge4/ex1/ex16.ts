let t:number[]=[]
let n = Number(prompt('donner la taille du tableau'))
for (let i=0;i<n;i++)
{
t[i] =Number(prompt('saise un nombre'))
}
let p =0
let ng = 0
for (let i=0;i<n;i++){
  if (t[i]>0){
   p++
  }
  else{
    ng++
  }
  
  }
  console.log('le nombre des cases positif est ', p);
  console.log('le nombre des cases négatifs est ', ng);
  

