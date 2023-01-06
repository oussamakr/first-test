let ch=prompt("saisie une chaine")  || ""
let lettre=prompt("saisie une lettre") || "" // condition de saisie " une seul nombre"
// let lettre=prompt("saisie une lettre")
let test=false;
let i=0;
 
while ( (i<= ch.length-1) && (test==false )) {
  if (ch[i] == lettre ){
    test = true
  }
  i++
}
if(test == true){
console.log("existe")
}
else {console.log("n'existe pas")}



