// let t : number[]=[]
// let i:number
//  for (let i = 0; i < 5; i++) {
//  t[i]=Number(prompt('saisie le contenu'))
//  }
var t = [1, 1, 1, 1, 1];
var sum = 0;
for (var i = 0; i < 5; i++) {
    sum = sum + t[i];
}
console.log('la somme de tableau est', sum);
