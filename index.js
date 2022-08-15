//Objects
const user = {
    name:"Ryan",
    lastname:"Perez",
    age:30,
    address:{
        county: 'mexico',
        city:'cdmx',
        street:'main street 111'
    },
    friends:['brandom','elena'],
    active:true,
    sendMail : function () {
        return 'sending email ...'
    },
    writeMail() {
        return 'write email ...'
    }
}

console.log(user);
console.log(user.name);
console.log(user.address);
console.log(user.address.city);
console.log(user.friends);
console.log(user.active);
console.log(user.sendMail);
console.log(user.sendMail());
console.log(user.writeMail);
console.log(user.writeMail());