

let j=Number(prompt("saise les nombres des jours" ))
let m=Number(prompt("saise les nombres des mois" ))
let a=Number(prompt("saise les nombres des années" ))

if (  
   (((j>=1) && (j<=31)) && ((m==1) || (m==3) || (m==5) || (m==7) || (m==8) || (m==10) || (m==12)) )  
      ||

(((j>=1) && (j<=30)) && (  (m==4) || (m==6) || (m==9) ||(m==11) ) )  
 ||
(

(m=2) && ((j>=1)&&(j<=29) && ( a % 2 == 0 ))  )
|| 
(
(m=2) && ((j>=1)&&(j<=28) && ( a>=1970 )) )

){
  console.log("date validé")
}
else {console.log("date non validé")}







