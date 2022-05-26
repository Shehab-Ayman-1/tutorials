// Compile ts To js With Command [tsc ts-file-name]
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone(name, color, available, degree, limits) {
        this.name = name;
        this.color = color;
        this.available = available;
        this.degree = degree;
        this.limits = limits;
    }
    Phone.prototype.info = function () {
        return this.name + " " + this.color;
    };
    return Phone;
}());
var InheretClass = /** @class */ (function (_super) {
    __extends(InheretClass, _super);
    // super(id, name, color, available) // error Cant't Access name Because It Is Private
    function InheretClass(id, color, available, degree, limits) {
        return _super.call(this, id, color, available, degree, limits) || this;
    }
    return InheretClass;
}(Phone));
var phone1 = new Phone("Oppo", "black", false, 50, 30);
var phone2 = new InheretClass(22, "red", true, 100, 1000);
// console.log(phone.name); // error
console.log(phone1.color);
console.log(phone1.available);
console.log(phone1.degree);
console.log(phone1.limits);
console.log(phone1.info());
console.log(phone2.info());
