//String literals

const background = 'yellow';
const color = 'black';
const isAuthorized = true;

const button = document.createElement('button');
button.innerText = 'click me'
button.style = `background: ${isAuthorized === true ? 'green': 'red'}; color: ${color}`


button.addEventListener('click', () =>{
    if(isAuthorized){
        return alert('is Authorized')
    }
    
    alert('is not Authorized')
})

document.body.append(button)
