import addNums from "./about";
import fullName from "./services";

let name = "shehab";
let obj = { name: "hesham", age: 21 };

addNums(obj.age, 10);
fullName(name, obj.name);
