// let n=Number(prompt("saisie la taile de tableau"))
// let t:number[]=[]
var t1 = [];
var t = [-2, -2, 1, 0, 9, 71];
var somme = 0;
var i = 0;
while ((t[i] != 0) && (i < t.length)) {
    somme += t[i];
    i++;
}
// for (let i = 0; i < t.length; i++) {
//   if(t[i]==0){
//     for (let j = 0; j < i; j++) {
//       t1[j]=t[j]
//       somme+=t1[j]
//     }
//   } 
// }
console.log(t);
console.log("S = " + somme);
