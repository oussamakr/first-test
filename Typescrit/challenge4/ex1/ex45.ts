let s="azer###aze#gg"

let t:any[]=[]
let t1:any[]=[]
let t2:any[]=[]
let s1=""
let s2=""
let s3=""
let pos=0
let nbr=0
let pos0=0
let i=0

// let s="azer#eerr#zdtaf#tr"


  


for (let index = 0; index < s.length; index++) {
  if(s[index]=="#") {
       pos=index
       nbr++
    for (let i = pos0; i < pos-nbr-1; i++) {
      t1[i]=s[i]
      s3+=t1[i]
      pos0=pos+1
      nbr=0
               }
              }}     
for (let k = pos0; k < s.length; k++) {
  s2+=s[k]
}






console.log("pos0 egal : "+pos0)

console.log(t1)
console.log(s3)
console.log(s2)

console.log(s)
console.log(s3+s2)





// for (let i = pos0; i < pos-nbr; i++) {
//   t1[i]=s[i]
//   pos0=pos+1
// nbr=0
// }




// for (let index = 0; index < s.length; index++) {
    

//   if(s[index]=="#") {
//   pos=index
//   nbr++
//   s1+=s.slice(pos0, pos-nbr)
//    pos0=pos+1
//    nbr=0

// }
// s2 = s.slice(pos0, s.length)

// }