// // var membre = new Object();
// // var membre={
// //   id : "12356",
// //   name:"oussama",
// //   grade:3,
// //   tostring:function () {
// //     return 'ID '+this.id+
// //     '\nname '+this.name+
// //     '\ngrade '+this.grade;
// //   }
// // };

// function member(id,name,grade) {
//   this.identifiant=id;
//   this.nom=name;
//   this.grade=grade;

//   this.tostring = function() {
//     return(this.nom+ ' possede une identifiant '+this.identifiant+ ' avec un grad ' +this.grade)
//   };
// }





// var team = {
//   membre1:{
//     nom:"wajdi",
//     identifiant:12568,
//     grade:2,
//   },
//   membre2:{
//     nom:"ayemn",
//     identifiant:15689,
//     grade:2,
//   },
//   membre3:{
//     nom:"oussama",
//     identifiant:55582 ,
//     grade:1,
//   },
// }
// console.log(membre1)



function member(id, name, grade) {
  this.id       = id;
  this.name     = name;
  this.grade    = grade;
  this.toString = function() {
    return "ID: "+this.id+", Name: "+this.name+", Grade: "+this.grade;
  }
}
 
function team() {
  this.members  = new Array();
  this.add      = function(member) {
    var index           = this.members.length;
    this.members[index] = member;
    return index;
  }
  this.toString = function() {
    return this.members.join("\n");
  }
}
 
var myTeam = new team();
 
myTeam.add(new member(42, "Alice", "ICT C"));
myTeam.add(new member(43, "aymen", "156 C"));
myTeam.add(new member(44, "Baya", "ICT C"));
// myTeam.add(new member(45, "Firmus", "ICT B"));
// myTeam.add(new member(46, "Jean", "ICT C"));
// myTeam.add(new member(47, "Badria", "ICT A"));
// myTeam.add(new member(48, "Lalla", "ICT C"));
// myTeam.add(new member(49, "Souleymane", "ICT B"));

console.log(myTeam.toString())
 
document.writeln(myTeam);


