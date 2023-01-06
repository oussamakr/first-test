function fact(n:number){

  let factt=1;
  let i:number;
  for(i=2;i<=n;i++){
    factt = factt * i
  }
 
  return factt
}
let n=Number(prompt('saisie un nombre'))
console.log(fact(n))
