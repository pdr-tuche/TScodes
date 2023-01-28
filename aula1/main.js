function sayHi(person) {
    return "Hello ".concat(person.name, ", you're ").concat(person.age, " years old right?");
}
var pdr = {
    name: 'Pedro',
    age: 24
};
console.log(sayHi(pdr));
////////////////////////////////////////////////
var add = function (a, b) { return a + b; };
var mult = function (a, b) { return a * b; };
var user = {
    name: "ronaldo",
    age: 39,
    isAdmin: true,
    permissions: ['admin', 'change']
};
