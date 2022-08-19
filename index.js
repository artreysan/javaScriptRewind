//Arrays methods 

const names = ['ryan','joe','maria']

//Method 1 
for (let i = 0; i < names.length; i++){
    const element = names[i];
    console.log(element);
}

//Method 1 with  forEach()
console.log('============================================')
names.forEach(function(name){
    console.log(name)
})

//Method 2 with MAP
console.log('============================================')
const newNames = names.map(function(name){
    return `Hola ${name}`
})
console.log(newNames)

//Method 3 with FIND
console.log('============================================')
const nameFound =  names.find(function (name){
    if(name === 'joe'){
        return name
    }
})
console.log(nameFound)

//Method 4 with FILTER
console.log('============================================')
const nameFilter =  names.filter(function (name){
    if(name !== 'joe'){
        return name
    }
})
console.log(nameFilter)

//Method 5 with CONCAT 
console.log('============================================')
const newNamess = ['marco', 'mario', 'john']
console.log(names.concat(newNamess))

// More information: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array 