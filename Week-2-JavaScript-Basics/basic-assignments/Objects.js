// Question-1: Create a function to perform a deep clone of an object, handling nested objects and arrays.

function deepCopy(obj) {
    const keys = Object.keys(obj);
    let newObject = {};

    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        newObject[key] = obj[key];
    }
    return newObject;
}

let obj = {
    name: "Ayush",
    age: 22,
    gender: "male",
};

const newObj = deepCopy(obj);
console.log(newObj);

// Question-2: Write a function that takes two objects and returns an object containing the common key-value pairs.

let obj1 = {
    name: "Ayush",
    age: 22,
    gender: "male",
    address: "Ranchi",
};

function commonKeyValue(obj, obj1) {
    let newObject = {};
    for (let key in obj) {
        if (obj1.hasOwnProperty(key) && obj[key] === obj1[key]) {
            newObject[key] = obj[key];
        }
    }
    return newObject;
}

let newObject = commonKeyValue(obj, obj1);
console.log(newObject);

// Question-3: Create a function that transforms an object by renaming its keys based on a provided mapping. The function should handle nested objects. For example:

function transfromObj() { }
