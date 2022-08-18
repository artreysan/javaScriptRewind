//Return on Functions

const button = document.createElement('button');
button.innerText = 'click me 2'

const isAuthorized = false;

button.addEventListener('click', () =>{
    if(isAuthorized){
        return alert('is Authorized')
    }
    
    alert('is not Authorized')
})

document.body.append(button)
