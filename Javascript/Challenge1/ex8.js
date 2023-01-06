
  
  function info(sexe,supplement,personnesencharge) {
    this.sexe=sexe
    this.supplement=supplement
    this.personnesencharge=personnesencharge
  }

  var personne1=new info("homme",150,4)

console.log(personne1.sexe)
console.log(personne1.supplement)
console.log(personne1.personnesencharge)

function saalaire(sexe , supplement , personnesencharge){

var ISR=0.18
var AE=0.07
var RPC=0.05

var salaire =0
var salaire_brut = 4300
 if(sexe=="femme" && personnesencharge >= 4 ){
    salaire =  salaire_brut -(salaire_brut*((ISR-0.04)+AE+RPC))+ supplement
  }
  else if( personnesencharge >= 4 ){
    salaire =  salaire_brut -(salaire_brut*((ISR-0.02)+AE+RPC))+ supplement
  }
  else if(sexe=="femme"   ){
    salaire =  salaire_brut -(salaire_brut*((ISR-0.02)+AE+RPC))+ supplement
  }

else  {
  salaire =  salaire_brut -(salaire_brut*((ISR)+AE+RPC))+ supplement
}
   

 return(salaire)

  }


  console.log(saalaire(personne1.sexe , personne1.supplement,personne1.personnesencharge))

