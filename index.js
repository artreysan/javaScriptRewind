// Optional Chaining 

const person = {
    name: 'ryan',
    address: {
        city: 'london'
    }
}

// Problem long
//If existiong 'location' print
if (person.location){
    console.log(person.location.city)
}

// Optional short solution 
console.log(person.location?.city)


