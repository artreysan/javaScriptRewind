// Async Await 

const ul = document.createElement('ul')
const li = document.createElement('li')

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Codido asincrono
/*
            let data = fetch('https://jsonplaceholder.typicode.com/posts').then(function (response){
                console.log(response)
                return response.json()
            }).then(function(data){
                console.log(data)
                data.forEach(function(post){
                    const li = document.createElement('li');
                    li.innerText = post.title
                    ul.append(li)
                })
                document.body.append(ul);
            })
            console.log('linea dos')
*/

//Sintax Moderm Async/Await
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
async function loadData(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    data.forEach((element) => {
       const li = document.createElement('li'); 
       li.innerText = element.title;
       ul.append(li)
    }); 
    document.body.append(ul);
}

loadData()

console.log('linea dos')
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++