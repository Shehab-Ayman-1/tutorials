// Compile
/* 
    Compile ts To js With Command => [tsc ts-file-name --watch]
*/

// Strings
/* 
    var st: string = "shehab";
    st = "hamada";
    console.log(st);
    console.log("#####################");
*/

// Numbers
/* 
    var num: number = 21;
    num = 18;
    // num = "shehab" // error because the num:type === number
    console.log(num);
    console.log("#####################");
*/

// Booleans
/* 
    var bol: boolean = false;
    console.log(bol);
    console.log("#####################");
*/

// objects
/* 
    var obj: object = { title: "typescript title", age: 21 };
    obj = { country: "Location" };
    console.log(obj);
    console.log("#####################");
*/

// Any-Type
/* 
    var anyTypeName: any = ["white", 21, true, ["blue", ["color"]], { favColor: "black" }];
    anyTypeName = false;
    console.log(anyTypeName);
    console.log("#####################");
*/

// Arrays
/* 
    var stArrName: string[] = ["shehab", "hesham"];
    var numArrName: number[] = [21, 23];
    var anyArrName: any[] = ["shehab", 21];
    stArrName = ["aya", "salma"];
    // stArrName = [21] // error
    console.log(stArrName, " | ", numArrName, " | ", anyArrName);
    console.log("#####################");
*/

// Tuple
/* 
    var tupleData: [string, number, boolean, string] = ["shehab", 21, true, "hesham"];
    // let tupleData: [string, number, boolean, string] = ["shehab", 21, true, 21]; error
    console.log(tupleData);
    console.log("#####################");
*/

// Union
/* 
    var union: string | number = "shehab"; // Can Be Strings OR Numbers
    union = 21;
    console.log(union);
    console.log("#####################");
*/

// enum
/* 
    enum weeksDay {
        saturday, // 0
        sunday, // 1
        monday, // 2
        tuethday = 22, // 22
        wendnesday, // 23
        thursday = "tuethday", //  tuethday
        friday = "friday", // friday
    }
    // hint: thursday break the loop with the new value, so that we have to get all the next elements the those values
    console.log("Satarday: ", weeksDay.saturday, "sunday: ", weeksDay.sunday, "monday: ", weeksDay.monday);
    console.log("Tuethday: ", weeksDay.tuethday, "Wendnesday: ", weeksDay.wendnesday);
    console.log("thursday: ", weeksDay.thursday, "Friday: ", weeksDay.friday);
*/

// custome type
/* 
    type myTypeName = { name: string; age: number; state: boolean };
    var myObj: myTypeName = { name: "shehab", age: 21, state: true };
    // var myObj: myTypeName = { name: "shehab", age: 21, state: "name" }; // error
    console.log(myObj);
*/

// type assertion
/* 
    var mynum: any = 22;
    var myval1 = <number>mynum;
    var myval2 = mynum as number;
    myval1 = 30;
    // myval1 = "shehab"; // error
    console.log(myval1, myval2);
*/

// functions
/* 
    function fullName(fName: string, lName: string): void {
        // Void Is Using To Make The Function Just Do Any Functionality With No Returs Value
        console.log(fName.toUpperCase() + " " + lName.toUpperCase());
    }
    fullName("shehab", "ayman");

    function addNums(num1: number, num2: number): number {
        return num1 + num2;
    }
    console.log(addNums(2, 3));
*/

// interface
/* 
    interface phoneModule {
        id: number;
        name: string;
        color?: string; // ? => To Make The Color Is Optional
        available: boolean;
    }

    var user1: phoneModule = {
        id: 1,
        name: "samsung",
        color: "red",
        available: false,
    };

    var user2: phoneModule = {
        id: 2,
        name: "oppo",
        available: true,
    };
*/

// OOP
/* 
    interface typesForClasses {
        degree: number;
        limits: number;
    }

    class Phone implements typesForClasses {
        protected id: number; // just using in the inheretance classes
        private name: string; // just using in this class
        public color: string; // public property
        available: boolean; // public property
        degree: number;
        limits: number;

        constructor(name: string, color: string, available: boolean, degree: number, limits: number) {
            this.name = name;
            this.color = color;
            this.available = available;
            this.degree = degree;
            this.limits = limits;
        }

        info(): string {
            return this.name + " " + this.color;
        }
    }

    class InheretClass extends Phone {
        // super(id, name, color, available) // error Cant't Access name Because It Is Private
        constructor(id, color: string, available: boolean, degree: number, limits: number) {
            super(id, color, available, degree, limits);
        }
    }

    var phone1 = new Phone("Oppo", "black", false, 50, 30);
    var phone2 = new InheretClass(22, "red", true, 100, 1000);
    // console.log(phone.name); // error
    console.log(phone1.color);
    console.log(phone1.available);
    console.log(phone1.degree);
    console.log(phone1.limits);
    console.log(phone1.info());
    console.log(phone2.info());
*/
