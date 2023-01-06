let ch=prompt('saisie une chaine') || ''
let ch1:string='';
for (let i = ch.length-1; i >= 0; i--) {
    ch1 = ch1 + ch[i]  
   
   }
console.log(ch1)