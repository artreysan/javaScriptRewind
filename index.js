//Arrow Functions

//Example 
function add1(x,y){
    return x+y
}

const add2 = (x,y)=>{
    return x+y
}
console.log(add1(5,5));
console.log(add2(2,2));

//Mode 1
const button1 = document.createElement('button');
button1.innerText = 'click me 1'
button1.addEventListener('click', function(){
    alert('clicked 2')
})
document.body.append(button1)

//Mode 2 
const button2 = document.createElement('button');
button2.innerText = 'click me 2'
button2.addEventListener('click', () =>{
    alert('clicked 2')
})
document.body.append(button2);