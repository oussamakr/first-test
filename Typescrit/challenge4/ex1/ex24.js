var n;
n = Number(prompt("saisie la taille"));
while (n < 0 || n > 20) {
    if (n < 0) {
        alert("plus grand");
        n = Number(prompt("danner un nombre plus grand que 5"));
    }
    else {
        alert("plus petit");
        n = Number(prompt("donner un nobre plus petit que 20"));
    }
}
console.log(+n + " est un taille adéquat avec la condistion de saisie  ");
var t = [];
for (var i = 0; i < n; i++) {
    console.log(i);
    t[i] = Number(prompt("saisie de contenu de tableau de taille " + n));
    if (t[i] < 0) {
        t[i] = Number(prompt("saisie incorrect , merci d'inserer un nombre positif "));
        i--;
        console.log(i);
    }
    console.log(i);
    //  let S= Number(prompt('donner une note'))
    //  while(S<=0){
    //  S= Number(prompt('donner une note positif'))
    //  }
    //   t[i]=S
}
console.log(t);
// let n=Number(prompt('saisie un nombre sueriere a 5'))
// while ( (n<5 )||(n>20)) {
//   if (n<5 ){
//     let n=Number(prompt('saisie un nombre sueriere a 5'))
//   }
//   else if (n>20) {let n=Number(prompt('saisie un nombre inferieure a 20'))}
// }
// console.log('le nombre est  '+n)
// for (let i = 0; i < n; i++) {
//   if (t[i]>=0){
//     t[i]=Number(prompt('saisie la contenu du tableau '))
//   }
//   console.log(t[i])
// }
// let somme = 0
// let moy = 0
// for (let i = 0; i < n; i++) {
//   somme = t[i]+somme
// }
// moy = somme / n
// console.log(moy)
