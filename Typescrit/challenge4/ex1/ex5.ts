function range(nom1:string,nom2:string,nom3:string){
  if ( (nom1<=nom2) && (nom2<=nom3 ) ){
    return 'les noms sont rangés dans lordre alphabétique'
  }
  else {
    return 'les non ne sont pas rangés dans lorde alphabétique'
  }
}

let nom1 = prompt('saise la prémiere nom 1')  || ''
let nom2 = prompt('saise la prémiere nom 2')  || ''
let nom3 = prompt('saise la prémiere nom 3')  || ''

console.log(range(nom1,nom2,nom3))
