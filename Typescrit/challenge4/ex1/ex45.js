var s = "azer###aze#gg";
var t = [];
var t1 = [];
var t2 = [];
var s1 = "";
var s2 = "";
var s3 = "";
var pos = 0;
var nbr = 0;
var pos0 = 0;
var i = 0;
// let s="azer#eerr#zdtaf#tr"
for (var index = 0; index < s.length; index++) {
    if (s[index] == "#") {
        pos = index;
        nbr++;
        for (var i_1 = pos0; i_1 < pos - nbr - 1; i_1++) {
            t1[i_1] = s[i_1];
            s3 += t1[i_1];
            pos0 = pos + 1;
            nbr = 0;
        }
    }
}
for (var k = pos0; k < s.length; k++) {
    s2 += s[k];
}
console.log("pos0 egal : " + pos0);
console.log(t1);
console.log(s3);
console.log(s2);
console.log(s);
console.log(s3 + s2);
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
