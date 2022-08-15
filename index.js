function hello(){
    console.log("hola mundo");
    console.log('work with JS');
}

function hello2(){
    return 'hola return';
}
function helloBool(){
    return true
}
function helloArr(){
    return [1, 2,2 ];

}
//Object
function helloObj(){
    return {name:ryan}
}
//funtion returned
 function helloReturn(){
    return function () {
        return 'hola mundo returnada';
    }
 }

hello();
const result = hello2();
console.log(result);
console.log(hello2());
console.log(helloBool());
console.log(helloArr());
//Fundamentals fo Funtional Programming
console.log(helloReturn());
console.log(helloReturn()());
