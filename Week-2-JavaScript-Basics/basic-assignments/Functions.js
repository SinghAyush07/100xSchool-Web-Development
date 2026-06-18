// Question-1: Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet("Ayush");

// Question-2: Write a function that takes two parameters, adds them together, and returns the result.

function sum(a, b) {
    return a + b;
}

console.log("3+5 = " + sum(3, 5));

// Question-3: Write a function that takes the current hour as a parameter and logs a different greeting message based on whether it's morning, afternoon, or evening.

function greeting(time) {
    if (time >= 5 && time < 12) console.log("Good Morning!");
    else if (time >= 12 && time <= 15) console.log("Good Afternoon!");
    else console.log("Good Evening!");
}

greeting(8);
greeting(12);
greeting(16);
