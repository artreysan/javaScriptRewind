//Default Parameters
//Case
function sub(x,y){
    return x-y;
}
//Solution 1
function add(x, y){
    if(y === undefined){
        y = 0;
    }
    return x + y;
}
//Solution 2
function aDD(x,y=0){
    return x+y;
}

console.log(sub(23));
console.log(add(15));
console.log(add(15,undefined));
console.log(aDD(13));
console.log(aDD(13,2));
