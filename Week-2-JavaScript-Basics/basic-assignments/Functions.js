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

// Question-4: Write a function that calculates and returns the area of a rectangle. The function should take the length and width as parameters.

function area(length, width) {
    return length * width;
}

console.log(area(2, 3.14));

// Question-5: Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

function power(base, exponent) {
    return base ** exponent;
}

console.log(power(3, 8));

// Question-6: Write a function that takes a number as a parameter and returns true if it's a prime number and false otherwise.

function isPrime(num) {
    let factors = 0;
    for (let i = 2; i * i <= num; i++) {
        if (num % i == 0 && num != i) factors++;
    }
    if (factors != 0) return false;
    else return true;
}

console.log("2 : " + isPrime(2));
console.log("25 : " + isPrime(25));

// Question-7: Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

let global = 6;

function localVar() {
    global = 8;
    let local = 10;
    console.log("Global = " + global);
    console.log("Local = " + local);
}

console.log("Global = " + global);
// console.log("Local = " + local);

function globalVar() {
    console.log("Global = " + global);
    //  console.log("Local = " + local);
}

localVar();
globalVar();

// Question-8: Write a function that returns another function. The inner function should have access to a variable from the outer function.

function calculate(sum) {
    let a = 10;
    let b = 20;
    return sum(a, b);
}

function sum(a, b) {
    return a + b;
}

console.log("Sum = " + calculate(sum));

// Question-9: Write a recursive function to calculate the factorial of a given number.

function factorial(num) {
    if (num == 1) return 1;
    return num * factorial(num - 1);
}

console.log(factorial(5));

// Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

// we will use compose utility for this

const compose =
    (...fns) =>
        (initialValue) =>
            fns.reduceRight((accumulator, fn) => fn(accumulator), initialValue);

const trim = (str) => str.trim();
const capitalize = (str) => str.toUpperCase();
const exclaim = (str) => `${str}`;

const prepareGreeting = compose(exclaim, capitalize, trim);
console.log(prepareGreeting("   hello world   ")); // "HELLO WORLD!"
