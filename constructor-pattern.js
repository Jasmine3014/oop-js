function person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new person('jasmine', 22)
console.log(p1.name +' age:' +p1.age)

//stored in array
function person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new person('jasmine', 22)
var p2 = new person('akik', 19)
var p3 = new person('jasmine', 22)
var people = [p1,p2,p3]
// console.log(people)
people.forEach (function (person ){
    console.log('age :' +person.age)
})

//another example
function Book(name,author,published){
    this.name =name;
    this.author = author ;
    this.published = published;

}
var book = new Book('zoology','jasmine',2014)
console.log(constructor.book)