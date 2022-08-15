//Anonymous Functions
//Funcion establecida
function start(){
    return "Starting ... "
}

console.log(start())

//Funcion anonima
console.log(function (){
    return "Starting anonymous"
}())

//Example
//Mode 1 without anonymous function
const button1 = document.createElement('button');
button1.innerText = 'click me 1'

function handleClick(){
    alert('clicked 1');
} 
button1.addEventListener('click',handleClick);
document.body.append(button1)

//Mode 2 with anonymous fucntion
const button2 = document.createElement('button');
button2.innerText = 'click me 2'
button2.addEventListener('click', function(){
    alert('clicked 2')
})
document.body.append(button2);