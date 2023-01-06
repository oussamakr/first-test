function som(n:number){


let i:number;
let somm=0

for (i=1;i<=n ; i++){
somm = somm + i
}
console.log(somm)

}

let n=Number(prompt('saisie un nombre'))
console.log(som(n))