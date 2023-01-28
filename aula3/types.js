var Stark = /** @class */ (function () {
    function Stark() {
        this.saying = Stark.castle;
    }
    Stark.prototype.hello = function (person) {
        console.log("hello, " + person);
    };
    Stark.castle = "winterfell";
    return Stark;
}());
var ned = new Stark();
console.log(ned.saying);
ned.saying = "winter is coming";
console.log(Stark.castle);
console.log(ned.saying);
ned.hello("robert");
