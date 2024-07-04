//       ========== Encapsulation =========
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
var Student = /** @class */ (function () {
    function Student(name, password, isDegree) {
        this.name = name;
        this.password = password;
        this.isDegree = isDegree;
    }
    return Student;
}());
var student = new Student("john", "12345", false);
console.log(student);
var Admin = /** @class */ (function () {
    function Admin(userName, password, addNewAdmin, removeUser) {
        this.userName = userName,
            this.password = password,
            this.addNewAdmin = addNewAdmin,
            this.removeUser = removeUser;
    }
    return Admin;
}());
var admin = new Admin("Floria", "Flora7667", false, true);
console.log(admin);
var Phone = /** @class */ (function () {
    function Phone(brand, model, cost, memory, ip_address) {
        this.brand = brand;
        this.model = model;
        this.cost = cost;
        this.memory = memory;
        this.ip_address = ip_address;
    }
    return Phone;
}());
var phone = new Phone("Iphone", "13 Pro Max", 500, "256GB", "192.168.1.0.1");
console.log(phone);
//       ========== Inheritance =========
var Car = /** @class */ (function () {
    function Car(model, company, price, color, climateControl) {
        this.model = model;
        this.company = company;
        this.price = price;
        this.color = color;
        this.climateControl = climateControl;
    }
    return Car;
}());
var SuperCar = /** @class */ (function (_super) {
    __extends(SuperCar, _super);
    function SuperCar(model, company, price, color, climateControl, weight, maxSpeed) {
        var _this = _super.call(this, model, company, price, color, climateControl) || this;
        _this.weight = weight;
        _this.maxSpeed = maxSpeed;
        return _this;
    }
    return SuperCar;
}(Car));
var car = new SuperCar("Porche 911 Turbo S", "Porche", 2000.000, "gray", true, "1.3 tons", "305km\h");
console.log(car);
var Company = /** @class */ (function () {
    function Company(owner, workers_count, substitutes, annuity, annual__projects__count, capital) {
        this.owner = owner;
        this.workers_count = workers_count;
        this.substitutes = substitutes;
        this.annuity = annuity;
        this.annual_projects_count = annual__projects__count;
        this.capital = capital;
    }
    return Company;
}());
var ArtelCompany = /** @class */ (function (_super) {
    __extends(ArtelCompany, _super);
    function ArtelCompany(owner, workers_count, substitutes, annuity, annual__projects__count, capital, affiliates, product_name) {
        var _this = _super.call(this, owner, workers_count, substitutes, annuity, annual__projects__count, capital) || this;
        _this.affiliates = affiliates;
        _this.product_name = product_name;
        return _this;
    }
    return ArtelCompany;
}(Company));
var company = new ArtelCompany("Jakhongir Ortikov", 250.000, ["Ramziddin Husanov", "Mirolim Komolov", "Komoliddin Parvozov"], "2.500.000.000 $", 350.000, "6.000.000 $", ["Toshkent", "Farg'ona", "Andijon", "Samarqand"], ["Televizor", "Muzlatkich", "Gaz-plitasi", "Konditsaner"]);
console.log(company);
var Bank = /** @class */ (function () {
    function Bank(director, substitute, customers__count, locations, loan_periods, benefits, education_loan) {
        this.director = director;
        this.substitute = substitute;
        this.customers__count = customers__count;
        this.locations = locations;
        this.loan_periods = loan_periods;
        this.benefits = benefits;
        this.education_loan = education_loan;
    }
    return Bank;
}());
var AgroBank = /** @class */ (function (_super) {
    __extends(AgroBank, _super);
    function AgroBank(director, substitute, customers__count, locations, loan_periods, benefits, education_loan, partners, plasticCardsTypes) {
        var _this = _super.call(this, director, substitute, customers__count, locations, loan_periods, benefits, education_loan) || this;
        _this.partners = partners;
        _this.plasticCardsTypes = plasticCardsTypes;
        return _this;
    }
    return AgroBank;
}(Bank));
var bank = new AgroBank("Jo'rayev Bahkhodir", "Komoliddin Farhodov", 4500, ["Mirzo-Ulug'bek tumani Darhon ko'chasi 45-uy", "Chilonzor tumani Qatortol ko'chasi 34-uy", "Shayhontohur tumani Quruvchilar ko'chasi 125-uy"], ["1- oydan, 6-oygacha", "1-yildan, 3-yilgacha", "3-yildan 15-yilgacha"], true, false, ["Ucell", "BUKA", "Craffers", "Nestle"], ["UzCard", "HUMO", "Visa", "MasterCard"]);
console.log(bank);
//       ========== Abstraction =========
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getPerimeter = function () {
        return (this.width + this.height) * 2;
    };
    return Rectangle;
}(Shape));
var rectangle = new Rectangle(5, 15);
console.log(rectangle.getPerimeter());
var Arithmetic = /** @class */ (function () {
    function Arithmetic() {
    }
    return Arithmetic;
}());
var MediumArithmetic = /** @class */ (function (_super) {
    __extends(MediumArithmetic, _super);
    function MediumArithmetic(num1, num2) {
        var _this = _super.call(this) || this;
        _this.num1 = num1;
        _this.num2 = num2;
        return _this;
    }
    MediumArithmetic.prototype.getMediumArithmetic = function () {
        return (this.num1 + this.num2) / 2;
    };
    return MediumArithmetic;
}(Arithmetic));
var arithmetic = new MediumArithmetic(5, 15);
console.log(arithmetic.getMediumArithmetic());
var RevArray = /** @class */ (function () {
    function RevArray() {
    }
    return RevArray;
}());
var ReverseArray = /** @class */ (function (_super) {
    __extends(ReverseArray, _super);
    function ReverseArray(arr) {
        var _this = _super.call(this) || this;
        _this.arr = arr;
        return _this;
    }
    ReverseArray.prototype.reverseWords = function () {
        return this.arr.reverse();
    };
    return ReverseArray;
}(RevArray));
var reverseWords = new ReverseArray(["Hello", "World"]);
console.log(reverseWords.reverseWords());
// abstract class Multiply {
//     abstract multiplyPlus(): string;
// }
// class MultiplyPlus extends Multiply {
//     num: number;
//     constructor(num: number) {
//         super();
//         this.num = num;
//     }
//     multiplyPlus(): string {
//         let square: any = "";
//         for (let i: any = 0; i < this.num; i++) {
//             square += "+".repeat(this.num);
//             if (i < this.num - 1) {
//                 square += "\n";
//             }
//         }
//         return square;
//     }
// }
// let pluses: MultiplyPlus = new MultiplyPlus(8);
// console.log(pluses.multiplyPlus());
//       ========== Polymorphism =========
var MathMultiply = /** @class */ (function () {
    function MathMultiply() {
    }
    MathMultiply.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    return MathMultiply;
}());
var multiplyNumbers = /** @class */ (function (_super) {
    __extends(multiplyNumbers, _super);
    function multiplyNumbers() {
        return _super.call(this) || this;
    }
    multiplyNumbers.prototype.multiply = function (num1, num2) {
        return num1 * num2;
    };
    return multiplyNumbers;
}(MathMultiply));
var multiplyNum = new multiplyNumbers();
console.log(multiplyNum.multiply(4, 6));
var Shape1 = /** @class */ (function () {
    function Shape1() {
    }
    Shape1.prototype.areaRomp = function (str1, str) {
        return str1 * str;
    };
    return Shape1;
}());
var AreaRomp = /** @class */ (function (_super) {
    __extends(AreaRomp, _super);
    function AreaRomp() {
        return _super.call(this) || this;
    }
    AreaRomp.prototype.areaRomp = function (str1, str) {
        return str1 * str;
    };
    return AreaRomp;
}(Shape1));
var areaRump = new AreaRomp();
console.log(areaRump.areaRomp(7, 6));
var Shape2 = /** @class */ (function () {
    function Shape2() {
    }
    Shape2.prototype.areaRomp = function (str1, str2) {
        return str1 + str2;
    };
    return Shape2;
}());
var PlusString = /** @class */ (function (_super) {
    __extends(PlusString, _super);
    function PlusString() {
        return _super.call(this) || this;
    }
    PlusString.prototype.areaRomp = function (str1, str2) {
        return str1.concat(" ", str2);
    };
    return PlusString;
}(Shape2));
var plusString = new PlusString();
console.log(plusString.areaRomp("Hello", "World")); // Output: 12
