/*const name = "valplay";
const age = 35;
const teacher = true;
console.log(`eu sou ${name} e tenho ${age} anos.`);*/

const person = {
    name: 'valdir',
    age: 35,
    teacher: true,
    sayHello: function () {
        console.log(`oi, meu nome é ${this.name} e eu tenho ${this.age} anos.`);
    },
};

person.sayHello();