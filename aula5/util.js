var Utility;
(function (Utility) {
    var useful = /** @class */ (function () {
        function useful() {
        }
        useful.prototype.timesTwo = function (n) {
            return n * 2;
        };
        return useful;
    }());
    Utility.useful = useful;
})(Utility || (Utility = {}));
///<reference path = "timesTwo.ts"/>
var use = new Utility.useful();
console.log(use.timesTwo(9));
//tsc util.ts timesTwo.ts --out util.js para compilar os modulos em um js
