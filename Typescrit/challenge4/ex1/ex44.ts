function PGCD(a:number,b:number) {
  while (a != b) {
   if (a>b){ 
    a= a - b 
   }
   else (b = b -a)
   }
  return a
  }





let str=prompt('saisie une chaine')  || ''
let i = 0
while (str[i].charCodeAt(0)<97 || str[i].charCodeAt(0)>122 ) {
  str=prompt('saisie une chaine')  || ''
}
i++
console.log(str)



let strinv:string
strinv = ''

let k=Number(prompt('saisie un entier '))
// console.log(PGCD(str[0].charCodeAt(0),k))
let j=0
while (j<str.length   ) {
  if (PGCD(str[j].charCodeAt(0),k) == 1 ){
    strinv += str[j].toLocaleUpperCase()
  }
  else{
    strinv += str[j]
  }
  j++
}




console.log(strinv)



