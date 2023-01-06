function occurence() {
    var oc = [];
    for (var i = 0; i < 26; i++) {
        oc[i] = 0;
    }
    var ch = prompt('saisie un text') || "";
    for (var index = 0; index < ch.length; index++) {
        var ch2 = ch[index].toLocaleUpperCase();
        var O = ch2.charCodeAt(0) - 65;
        console.log(typeof (O));
        oc[O] = oc[O] + 1;
    }
    console.log(oc);
}
occurence();
// let choc:string=""
// let min =0
// for (let i = 1; i < ch.length; i++) {
//     if (ch[min]==ch[i]){
//       choc += ch[i]
//   }
// }
// min++
