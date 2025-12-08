//  JavaScript ex 1 to 11

//(1) Alert 

// task (1)

alert("Hello, World!");

// task (2)

alert("Usama Ahmed");

// task no (3)

alert(2026);

// task (4)

var message = "Hi! I Am Web-Developer"
alert(message);

// task (5)

var first = "Hello";
var second = "World!"
var combined = first + second;
alert(combined);


//  (2) Variables for Strings 

// task (1)

var userName = "Usama Ahmed";

// task (2)

var newMessage = "Nice to meet you!"
alert(newMessage);

// task (3)

var firstName = "Usama";
var lastName = "Ahmed";
var fullName = firstName + " " + lastName;
console.log(fullName);

// task (4)

let favoriteQuote = "Work hard in silence, let success make the noise.";
console.log(favoriteQuote);

// task (5)

var city = "Karachi";
alert("Welcome to " + city + "!");

//  (3) Variables for Numbers

// task (1)

var age = 20;
console.log(age);

// task (2)

var num1 = 20;
var num2 = 16;
var sum = num1 + num2;
console.log(sum);

// task (3)

var num3 = 50;
var num4 = 16;
var difference = num1 - num2;
console.log(difference);

// task (4)

var num5 = 5;
var num6 = 10;

var product = num5 * num6;
console.log(product);

// task (5)

let age2 = 20;

alert("You are " + age2 + " years old.");

//  (4) Math Expressions

// task (1)
var x = 10;
var y = 5;
var sum = i + j;
console.log(sum);

// task (2)

var sub = x - y;
alert(sub);

// task (3)

var mul = x * y;
console.log(mul);

// task (4)

var div = x / y;
console.log(div);

// task (5)

var rem = x % y;
console.log(rem);

//  (5) Prompt: Getting Input from the User 

// task (1)

var userName = prompt("What is your name?");
alert("Hi," + userName);

// task (2)

var age3 = prompt("Enter your age:");
alert("Your age is: " + age3);

// task (3)

var userNum = Number(prompt("Enter a number:"));
var double = userNum * 2;
alert("Double of your number is: " + double);

// task (4)

var color = prompt("What is your favourite color?");
alert("Wow I Like " + color + " too!")

// task (5)

var city = prompt("Enter your city name:");
alert("You are from " + city + ".");

//  (6) If Statement and Comparison Operators:

// task (1)

var age4 = prompt("Enter your age:");
age4 = Number(age4);
if (age4 < 30) {
    alert("You're still a young man.");
} else {
    alert("Age is just a number!");
}

// task (2)

var num = prompt("Enter a number:");
num = Number(num);
if (num % 2 === 0) {
    alert("Even number");
} else {
    alert("Odd number");
}

// task (3)

var num1 = Number(prompt("Enter the first number:"));
var num2 = Number(prompt("Enter the second number:"));
if (num1 > num2) {
    alert(num1 + " is greater than " + num2);
} else if (num2 > num1) {
    alert(num2 + " is greater than " + num1);
} else {
    alert("Both numbers are equal");
}


// task (4)

var correctPassword = "123456";
var userPassword = prompt("Enter your password:");
if (userPassword === correctPassword) {
    alert("Access granted");
} else {
    alert("Access denied");
}

// task (5)

var value1 = Number(prompt("Enter first value:"));
var value2 = Number(prompt("Enter second value:"));

// Loose equality ==

alert(value1 + " == " + value2 + " → " + (value1 == value2));

// // Strict equality ===

alert(value1 + " === " + value2 + " → " + (value1 === value2));

// // Loose inequality !=
alert(value1 + " != " + value2 + " → " + (value1 != value2));

// // Strict inequality !==
alert(value1 + " !== " + value2 + " → " + (value1 !== value2));

// Tasks Complete

// Tasks Complete By Usama Ahmed 