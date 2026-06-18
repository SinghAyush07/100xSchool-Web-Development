// Question-1 : Input the distance in Kilometer and Convert into Meter and Centimeter.

let distance = 3;

// meter
console.log(distance * 1000);
// centimeter
console.log(distance * 1000 * 100);

// Question-2: WAP to input radius of a circle and log the area of circle.

let radius = 13;
let area1 = 3.14 * radius * radius;

console.log("Area : " + area1);

// Question-3: WAP to input two numbers and perform arithmetic operations on those numbers

const num1 = 12;
const num2 = 34;

console.log("Sum :" + (num1 + num2));
console.log("Multiplication : " + num1 * num2);
console.log("Subtraction : " + (num1 - num2));
console.log("Remainder : " + (num1 % num2));
console.log("Division : " + num1 / num2);

// Question-4: WAP to calculate total marks in two subject and then calculate percentage.

const eng = 85;
const maths = 95;

const engPer = (eng / (eng + maths)) * 100;
const mathsPer = (maths / (eng + maths)) * 100;

console.log("English = " + engPer.toFixed(2));
console.log("Mathematics = " + mathsPer.toFixed(2));

// Question-5: WAP to input the length and breath of rectangle and calculate the area and parimeter of rectangle.

const length = 20;
const breath = 15;

let area = length * breath;
let perimeter = 2 * (length * breath);

console.log("Length = " + area);
console.log("Perimeter = " + perimeter);

// Question-6: WAP to input n numbers and log the average of those number.

let numArr = [12, 13, 15, 12, 51, 0, 890, 34];
let avg = 0;
for (let i = 0; i < numArr.length; i++) {
    avg += numArr[i];
}

console.log("Average = " + (avg / numArr.length).toFixed(2));

// Question-7: WAP to input the distance between two cities (in km) , convert and print this distance in meter, feet, inches, and centimeter.

let dis = 129;

console.log("Distance = " + dis * 1000 + " mtrs");
console.log("Distance = " + dis * 1000 * 3.28 * 12 + " inches");
console.log("Distance = " + dis * 1000 * 3.28 * 12 * 2.54 + " cms");

// Question-8: WAP to input the temperature in Fahrenheit and convert this temperature in Centigrade.

const fahTemp = 64;

console.log("Temperature: " + (((fahTemp - 32) * 5) / 9).toFixed(2) + "℃");

// Question-9: Input the quantity and rate of a product then calculate the amount. A discount of 10 % after then calculate discount amount and amount after discount.

const quantity = 329;
const rate = 2599;
const discount = 10;

const disAmt = 2599 * 0.1;
const amt = rate - disAmt;
const totalAmt = amt * quantity;

console.log("Discount Amount = " + disAmt.toFixed(2));
console.log("Total Amount = " + totalAmt);

// Question-10: Input principal amount, input rate of interest, input number of years, Then Calculate simple interest.

const principalAmount = 50000;
const rateOfInterest = 10;
const years = 4;

const simpleInterest = principalAmount * 0.1 * years;
console.log("Simple Interest = " + simpleInterest);
