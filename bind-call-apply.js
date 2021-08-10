function printMe(){
    console.log('hello' + this.name)
}
var obj ={
    name:'jas ',age:20
}
var obj2 ={
    name:'jas ',age:20
}
var binded = printMe.bind(obj);
binded()