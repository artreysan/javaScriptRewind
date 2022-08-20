//Spread Operator 
const names = ['ryan','joe','maria']
const newNames = ['marco', 'mario', 'john']

//Method with CONCAT 
console.log('============================================')
console.log(names.concat(newNames))

//Spread Operation
console.log('============================================')
console.log([...names,...newNames])


//Aplication
const user = {
    name:"ryan",
    lastname:"ray"
}
 const address = {
    street : 'main street 123',
    city: 'mexico'
 }


const userInfo={
    ...user,
    ...address
}

console.log(user)
console.log(address)
console.log(userInfo)