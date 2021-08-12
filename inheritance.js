function Person(){
    this.name = 'jasmine'
}
function Teacher(){
    Person.call(this)
    this.sub = 'math'
}
var teacher = new Teacher()
var name = teacher.name

console.log(name)