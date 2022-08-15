//Shorthand property names (Nombres abreviados  de propiedad)
const name = 'laptop'
const price = 3000

//Method 1
const nameProduct1 = {
    name:name,
    price:price
}

//Method 2
const nameProduct2 = {
    name,
    price
}
console.log(nameProduct1);
console.log(nameProduct2);