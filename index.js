//DOM manipulation

//Created a element h1
//"createElement" is a built-in funtion in JS
const title = document.createElement('h1')
//Show in console
console.log(title)
//Add a text to the element h1: 'Hola mundo desde JS'
title.innerHTML='Hola mundo desde JS'
document.body.append(title)

//Button
const button = document.createElement('button')
button.innerHTML = 'click here'
//Event handlers (Manejador de eventos)
button.addEventListener('click', function (){
    console.log('Clicked the button');    
});
//Other button
const button2 = document.createElement('button')
button2.innerHTML = 'change title'
button2.addEventListener('click',function () {
    title.innerHTML = 'Texto actualizado con JS'
    alert('se realizo un click');
})
document.body.append(button)
document.body.append(button2)