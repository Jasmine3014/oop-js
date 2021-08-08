// function person(name,age){
//     this.name = name;
//     this.age = age;
// }
// var p1 = new person('jasmine', 22)
// console.log(p1.name +' age:' +p1.age)

//stored im array
function person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new person('jasmine', 22)
var p2 = new person('akik', 19)
var p3 = new person('jasmine', 22)
var people = [p1,p2,p3]
console.log(people)