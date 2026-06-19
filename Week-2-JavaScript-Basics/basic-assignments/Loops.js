// Question-1: WAP that logs numbers from 1 to 10 to the console.

console.log("1 to 10 :");
for (let i = 1; i <= 10; i++) console.log(i);
console.log("\n");

// Question-2: WAP that log all even numbers from 2 to 20.

console.log("2 to 20 :");
for (let i = 2; i <= 20; i++) console.log(i);

// Question-3: WAP that counts backward from 10 to 1 and logs the values.

console.log("10 to 1 :");
for (let i = 10; i > 0; i--) console.log(i);

// Question-4: WAP to calculate the sum of numbers from 1 to 5.

let sum = 0;
for (let i = 0; i <= 5; i++) sum += i;

console.log("Sum = " + sum);

// Question-5: WAP that prints powers of 2 (2^n) up to 64.

console.log("Power = ");
for (let i = 0; i <= 6; i++) console.log(2 ** i);

// Question-6: WAP to Develop a do-while loop for a simple number guessing game. Ask the user to guess a number between 1 and 10, and keep prompting until they guess correctly.

let userInput = 3;
let flag = false;

// do {
//    let Num = Math.random(9) + 1;
//    if (userInput == Num) flag = true;
// } while (!flag);

// Question-7: WAP to display the multiplication table (1 to 10) in the console.

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

// Question-8: WAP that use the break statement to exit the loop when the counter reaches 5. Also, use continue to skip printing the value 3 ( Note : Loop Starts from 0).

for (let i = 0; i <= 20; i++) {
    if (i == 3) continue;
    else if (i == 5) break;
    else console.log(i);
}

// Question-9: WAP that logs numbers from 1 to 30. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz." For numbers which are multiples of both 3 and 5, log "FizzBuzz."

for (let i = 1; i <= 30; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}

// Question-10: WAP to identify and log prime numbers within a given range.

// lets take the range to be from 3 to 100

for (let i = 3; i <= 100; i++) {
    let factors = 0;
    for (let j = 2; j * j <= i; j++) {
        if (i % j == 0) factors++;
    }

    factors == 0
        ? console.log(i + " is Prime.")
        : console.log(i + " is NOT Prime.");
}
