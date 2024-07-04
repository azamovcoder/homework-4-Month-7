//       ========== Encapsulation =========


class Student{
    readonly name:string
    private password:string
    isDegree: boolean
    constructor(name:string, password:string, isDegree: boolean){
        this.name =  name
        this.password = password
        this.isDegree = isDegree
    }
}
let student: Student  = new Student("john", "12345", false)
console.log(student);

class Admin{
    readonly userName: string
    private password: string
    addNewAdmin: boolean
    removeUser: boolean
    constructor(userName: string, password:string, addNewAdmin: boolean, removeUser: boolean){
        this.userName = userName,
        this.password = password,
        this.addNewAdmin = addNewAdmin,
        this.removeUser = removeUser
    }
}
let admin: Admin = new Admin("Floria", "Flora7667", false, true)
console.log(admin);

class Phone{
    brand:string
    model: string
    readonly  cost: number
    memory: string
    private ip_address: string
    constructor(brand:string, model:string, cost:number, memory:string, ip_address: string ){
        this.brand = brand
        this.model = model
        this.cost = cost
        this.memory = memory
        this.ip_address = ip_address
    }
}
let phone: Phone = new Phone("Iphone", "13 Pro Max", 500, "256GB", "192.168.1.0.1")
console.log(phone);



//       ========== Inheritance =========


class Car{
    model:string
    company: string
    price: number
    color: string
    climateControl: boolean
    constructor(model:string, company: string, price: number, color: string,  climateControl: boolean){
        this.model = model
        this.company = company
        this.price = price
        this.color = color
        this.climateControl = climateControl

    }
}
class SuperCar extends Car{
    weight:string
    maxSpeed:string
    constructor(model:string, company: string, price: number, color: string,  climateControl: boolean, weight:string, maxSpeed:string ){
        super(model, company, price,color, climateControl)
        this.weight = weight
        this.maxSpeed = maxSpeed
    }


}
let car: SuperCar = new SuperCar("Porche 911 Turbo S", "Porche", 2000.000,"gray", true, "1.3 tons", "305km\h")
console.log(car);


class Company{
    private owner:string
    workers_count: number
     readonly substitutes:string[]
    annuity: string
    annual_projects_count: number
    readonly capital: string
    constructor( owner: string, workers_count: number, substitutes:string[], annuity:string, annual__projects__count:number, capital:string){
        this.owner = owner
        this.workers_count = workers_count
        this.substitutes = substitutes
        this.annuity = annuity
        this.annual_projects_count = annual__projects__count
        this.capital = capital
    }

}
class ArtelCompany extends Company{

    affiliates: string[]
    product_name: string[]
      constructor( owner: string, workers_count: number, substitutes:string[], annuity:string, annual__projects__count:number, capital:string, affiliates: string[], product_name:string[] ){
        super(owner, workers_count, substitutes, annuity, annual__projects__count ,  capital)
        this.affiliates = affiliates
        this.product_name = product_name
    }
    
}

let company: ArtelCompany = new ArtelCompany("Jakhongir Ortikov", 250.000, ["Ramziddin Husanov", "Mirolim Komolov", "Komoliddin Parvozov"], "2.500.000.000 $", 350.000, "6.000.000 $", ["Toshkent", "Farg'ona", "Andijon", "Samarqand"],["Televizor", "Muzlatkich", "Gaz-plitasi", "Konditsaner"] )

console.log(company);


class Bank{
    director: string
    substitute: string
    customers__count: number
    locations:string[]
    loan_periods:string[]
    benefits: boolean
    education_loan : boolean
    constructor(director: string, substitute: string, customers__count: number, locations:string[], loan_periods:string[], benefits: boolean, education_loan : boolean){
        this.director = director
        this.substitute = substitute
        this.customers__count = customers__count
        this.locations = locations
        this.loan_periods = loan_periods
        this.benefits = benefits
        this.education_loan = education_loan
    }
}

class AgroBank extends Bank{
    partners: string[]
    plasticCardsTypes: string[]
    constructor(director: string, substitute: string, customers__count: number, locations:string[], loan_periods:string[], benefits: boolean, education_loan : boolean, partners:string[], plasticCardsTypes:string[]){
        super(director, substitute, customers__count, locations, loan_periods, benefits, education_loan)
    this.partners = partners
    this.plasticCardsTypes = plasticCardsTypes}
    
    }

let bank: AgroBank = new AgroBank("Jo'rayev Bahkhodir", "Komoliddin Farhodov", 4500, ["Mirzo-Ulug'bek tumani Darhon ko'chasi 45-uy", "Chilonzor tumani Qatortol ko'chasi 34-uy", "Shayhontohur tumani Quruvchilar ko'chasi 125-uy"],["1- oydan, 6-oygacha", "1-yildan, 3-yilgacha", "3-yildan 15-yilgacha"], true, false, ["Ucell", "BUKA", "Craffers", "Nestle"], ["UzCard", "HUMO", "Visa", "MasterCard"])
console.log(bank);



//       ========== Abstraction =========


abstract class Shape{
    abstract getPerimeter():number
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width:number, height:number ){
        super()
        this.width =width
        this.height = height
    }

    getPerimeter(): number {
        return (this.width + this.height) * 2
    }
}

let rectangle: Rectangle = new Rectangle(5, 15)

console.log(rectangle.getPerimeter());


abstract class Arithmetic {
    abstract getMediumArithmetic(): number;
}

class MediumArithmetic extends Arithmetic {
    num1: number;
    num2: number;

    constructor(num1: number, num2: number) {
        super();
        this.num1 = num1;
        this.num2 = num2;
    }

    getMediumArithmetic(): number {
        return (this.num1 + this.num2) / 2;
    }
}

let arithmetic: MediumArithmetic = new MediumArithmetic(5, 15);
console.log(arithmetic.getMediumArithmetic());



abstract class RevArray {
    abstract reverseWords(): string[];
}

class ReverseArray extends RevArray {
    arr: string[];

    constructor(arr: string[]) {
        super();
        this.arr = arr;
    }

    reverseWords(): string[] {
        return this.arr.reverse();
    }
}

let reverseWords: ReverseArray = new ReverseArray(["Hello", "World"]);
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


class MathMultiply{
    multiply(num1: number, num2: number):number;
    multiply(num1:any, num2: any):any{
        return num1 * num2
    }
}

class multiplyNumbers extends MathMultiply{
    constructor(){
        super()
    }
    multiply(num1: any, num2: any){
        return num1 * num2 
    }
}

let multiplyNum: multiplyNumbers = new multiplyNumbers()
console.log(multiplyNum.multiply(4, 6));







class Shape1{
    areaRomp(str1: number, str:number ):number;
    areaRomp(str1:any, str: any):any{
        return str1 * str
    }
}

class AreaRomp extends Shape1{
    constructor(){
        super()
    }
    areaRomp(str1:any, str: any){
        return str1 * str 
    }
}

let areaRump: AreaRomp = new AreaRomp()
console.log(areaRump.areaRomp(7, 6));

class Shape2 {
    areaRomp(str1: string, str2: string): string;
    areaRomp(str1: any, str2: any): any {
        return str1 + str2;
    }
}

class PlusString extends Shape2 {
    constructor() {
        super();
    }

    areaRomp(str1: any, str2: any): any {
        return str1.concat(" ", str2)
    }
}

let plusString: PlusString = new PlusString();
console.log(plusString.areaRomp("Hello", "World")); // Output: 12
