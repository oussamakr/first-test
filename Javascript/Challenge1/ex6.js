// function validation() {
//   var z=nbrtoset.value ;
//   var testur=/^\d+$/;
  
//   if (testur.test(z)) {
//     nbrcoup++
//     console.log(nbrcoup)
//     z = parseInt(z);
//     if (z<nbralea) {
//       document.getElementById('resultat').innerHTML="le nombre souhaité est "+nbralea+" saisie un numbre plus grand que "+z;
//       nbrtoset.value='';
//       nbrtoset.focus()
     
//     }
//     else if (z>nbralea){
//       document.getElementById('resultat').innerHTML="le nombre souhaité est "+nbralea+" ,saisie un numbre plus petit que "+z;
//       nbrtoset.value='';
//       nbrtoset.focus()
     
//     }
//     else{
//       document.getElementById('resultat').innerHTML="le nombre est attient apres "+nbrcoup+" coup";
//     }
//   }
//   else{
//     document.getElementById('resultat').innerHTML="le contenu saisie n'est un nombre ";
//   }
// return false;
// }


// var max = 1000 ;
// document.getElementById('maxx').textContent = max;
// var nbralea=Math.floor((Math.random()*max)+1);
// var nbrcoup=0;
// var nbrtoset=document.getElementById('champdesaisie');




// nbrtoset.focus()





var max=10
var nbralea=Math.floor((Math.random()*max)+1);
var n=Number(prompt('donner un nombre'))

var i=1
while (n!=nbralea) {
  if (n<nbralea) {
   
   nbralea=Math.floor((Math.random()*max)+1)
     i++

  }
  else{
  
    nbralea=Math.floor((Math.random()*max)+1)
    i++
  }
}

console.log('le nombre d"essai est ' +i+ ' pour trouver le '+nbralea)