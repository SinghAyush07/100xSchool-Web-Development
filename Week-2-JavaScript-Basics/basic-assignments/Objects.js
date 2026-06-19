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
    gender: "Male",
};

const newObj = deepCopy(obj);
console.log(newObj);
