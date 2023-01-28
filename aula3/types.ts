class Stark {
    name:string
    static castle:string = "winterfell"
    saying:string

    constructor(){
        this.saying = Stark.castle
    }

    hello(person:string){
        console.log("hello, "+ person)
    }
}

var ned = new Stark()
console.log(ned.saying)
//ned.saying = "winter is coming"
console.log(Stark.castle)
console.log(ned.saying)
ned.hello("robert")