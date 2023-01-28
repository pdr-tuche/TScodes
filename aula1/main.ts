type Person= {
  name: string
  age: number
}

function sayHi(person: Person) {
  return `Hello ${person.name}, you're ${person.age} years old right?`;
}

let pdr = <Person>{
  name: 'Pedro',
  age: 24
}

console.log(sayHi(pdr));

////////////////////////////////////////////////

const add = (a:number, b: number):number => a + b
//assinatura para funcoes
type MathFunc = (a: number, b:number) => number;
const mult: MathFunc = (a, b) => a * b;

///////////////////////////////////////////////
type BasicUser = {
  name: string,
  age: number,
  isAdmin: boolean
}
// interfaces herdam apenas de classes ou tipos
interface UserWithPermissions extends BasicUser {
  permissions?: string[] // ? pode ser nulo
}

const user:UserWithPermissions = {
  name:"ronaldo",
  age: 39,
  isAdmin:true,
  permissions: ['admin', 'change']
}