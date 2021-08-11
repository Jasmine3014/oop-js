function printMe(){
    console.log('hello ,' + this.name)
}
var obj ={
    name:'jas ',age:20
}
var obj2 ={
    name:'jasmine ',age:20
}
// var binded = printMe.bind(obj);
// binded()

//call method
printMe.call(obj2)

//call method with two argument
function add(a,b){
    return (a+b)*this.c;
}

var obj3={
    c:2
}
var obj3={
    c:3
}
var res = add.call(obj3,10,3)
console.log (res);

