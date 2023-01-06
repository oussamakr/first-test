let t1:number[]=[1,2,3]
let t2:number[]=[0,1]



let schumf = 0


for (let i = 0; i < t1.length; i++) {
 for (let j = 0; j < t2.length; j++) {
   schumf =  schumf + (t1[i] * t2[j])
  
 } 

}
console.log("Le Schtroumpf de deux tableau est : "+schumf)