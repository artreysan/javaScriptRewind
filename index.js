//Destructuring 
const user = {
    name:'Joe',
    age:30
}
//Espera un objeto que tenga el atributo "name"
function printInfo({name}){
    return '<h1> Hola ' + name + ' </h1>'    
}
console.log(printInfo(user))
document.body.innerHTML = printInfo(user);