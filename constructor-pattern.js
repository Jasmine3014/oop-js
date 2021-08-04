function person(name,age){
    this.name = name;
    this.age = age;
}
var p1 = new person('jasmine', 22)
console.log(p1.name +' age:' +p1.age)