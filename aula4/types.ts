class Person {
    name: string

    constructor(name:string){
        this.name = name
    }

    dance(){
        console.log(this.name +" is dancing")
    }
}

var bran = new Person("bran")
bran.dance()

//////////////////////
class AwesomePerson extends Person {
    dance() { //overide
        console.log("SO AWESOME")
        super.dance() // chama o dance da classe pai
    }
}

var robb = new AwesomePerson("Robb")
robb.dance()