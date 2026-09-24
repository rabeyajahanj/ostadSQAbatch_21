//console.log("Hello, World!");
//let name ="I am a first class citizen in JavaScript";
//console.log(name);
let name1 ="Rabeya";
name1 = "Rabeya Jahan"; // This will throw an error because name1 is a constant and cannot be reassigned.
let age = 25;
age = 30; // This will work because age is declared with let and can be reassigned.
console.log(`My Name is ${name1} and I am ${age}`); //Es6 javascript plugin 
//create a array data with number of arraydata
//let arrayData = [1, 2, 3, 4, 5];
//console.log(arrayData.indexOf(4));
let objectData = { //Object key.value Inside the object we can store multiple data types like string, number, boolean, array, object etc.
    name: "Rabeya",
    age: 25,
    city: "Dhaka",
    Address: "Dhaka, Bangladesh",
    Phone: "01700000000",
    Email: "rabeya@example.com"
};
console.log(objectData.name);
console.log(objectData.age, objectData.city);
console.log(`My name is ${objectData.name} and my age is ${objectData.age}`);