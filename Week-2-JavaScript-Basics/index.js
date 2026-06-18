console.log("Hello World");

var userName = "Harkirat";
userName = 1;
userName = true;

console.log(userName);

// Assingment
let color = "Grey";
console.log(color);
const firstName = "Ayush";
console.log(userName);
var height = 183;
console.log(height);
let likePizza = true;
console.log(likePizza);

function greet(name) {
    console.log("Hello " + name);
    console.log("Namaste", name);
    console.log("kiwean aa singh" + name);
}

greet(firstName);

function isLegal(age) {
    age >= 18 ? console.log("Allowed") : console.log("Not Allowed");
}

isLegal(23);
isLegal(13);

// objects in JavaScript

let user1 = {
    name: "Harkirat",
    age: 30,
    password: "harkirat_is_cool",
};

let user2 = {
    name: "Ayush",
    age: 24,
    password: "AyushLovesKiara",
};

function chkAge(obj) {
    if (obj.age > 17) console.log(`${obj.name} has a Legal age to Vote.`);
    else console.log(`${obj.name} is underage and not allowed to Vote.`);
}

chkAge(user1);
chkAge(user2);

// assignments using filter

var arr = [2, 3, 4, 6, 7, 12, 32, 23, 25];

const res = arr.filter((arr) => arr % 2 == 0);
console.log(res);

// object assignment

var objArr = [
    {
        name: "ayush",
        age: 26,
    },
    {
        name: "harkirat",
        age: 30,
    },
    {
        name: "sainath",
        age: 21,
    },
    {
        name: "abishek",
        age: 21,
    },
    {
        name: "yasha",
        age: 13,
    },
];

function ageChecker(item) {
    if (item.age >= 18) return item;
}

let result = objArr.findLast(ageChecker);
console.log(result);

let resObjArr = objArr.filter(ageChecker);
console.log(resObjArr);
