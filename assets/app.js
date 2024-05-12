// alert("This is a message");
// alert(" Error! Please enter a valid password");
// alert("Welcome to JS land.. Happy coding!");
// alert("Welcome to JS land");
// alert("Happy Coding! prevent this page from creating addtional dialouges");
// alert("Hello!....I can run JS through my web brouser's console"); 
// let username = "";
// const myName = "Amina";
// var message
// var message = "Hello World";
// alert ("message");

// // Students Bio data 
// var studentName ="John Doe";
// var studentAge = " 20";
// var studentGrade ="A"

// // Display bio data in alert boxes
//  alert( studentName);
//  alert( studentAge);
//  alert( studentGrade);
//   var word = "Pizza";
//   var alertmessage ="";
//   for (var i = word.length; i >0;i--){
//     alertmessage += word.slice(0,i)+ "\n";
//   }
// alertmessage(word);

// var email = " amiankhanlodhi331@gmail.com";
// alert(" amiankhanlodhi331@gmail.com " );

//  var book= " A smarter way to learn javscript";
//  alert(" A smarter way to learn javscript");

function welcomeUser(cityName) {
    if (cityName.toLowerCase() === "karachi") {
        console.log("Welcome to the city of lights!");
    } else {
        console.log("Welcome to " + cityName + "!");
    }
}

function main() {
    var city = prompt("Enter the name of your city:");
    welcomeUser(city);
}

main();

function greetUser(gender) {
    if (gender.toLowerCase() === "male") {
        console.log("Good Morning Sir.");
    } else if (gender.toLowerCase() === "female") {
        console.log("Good Morning Ma'am.");
    } else {
        console.log("Good Morning!");
    }
}

function main() {
    var gender = prompt("Enter your gender (male/female):");
    greetUser(gender);
}

main();

function trafficSignal(color) {
    switch(color.toLowerCase()) {
        case "red":
            console.log("Must Stop");
            break;
        case "yellow":
            console.log("Ready to move");
            break;
        case "green":
            console.log("Move now");
            break;
        default:
            console.log("Invalid color");
    }
}

function main() {
    var color = prompt("Enter the color of the traffic signal:");
    trafficSignal(color);
}

main();

function checkFuelLevel(fuel) {
    if (fuel < 0.25) {
        console.log("Please refill the fuel in your car");
    } else {
        console.log("Your fuel level is sufficient");
    }
}

function main() {
    var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
    checkFuelLevel(fuel);
}

main();



var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
    alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
}
if (c === 13){
    alert("condition 2 is true");
}
if (++c < 14){
    alert("condition 3 is true");
}
if(c === 14){
    alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
    alert("The cost equals");
}

if (true){
    alert("True");
}
if (false){
    alert("False");
}
if ("car" < "cat") {
    alert("car is smaller than cat");
}

function computeGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "Fail";
    }
}

function main() {
    var subject1 = parseFloat(prompt("Enter marks obtained in first subject:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in second subject:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in third subject:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var totalObtainedMarks = subject1 + subject2 + subject3;
    var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
    var grade = computeGrade(percentage);

    console.log("\nTotal Marks: " + (3 * totalMarks));
    console.log("Marks Obtained: " + totalObtainedMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: " + grade);
}

main();

function computeGradeRemarks(grade) {
    switch (grade) {
        case "A+":
            return "Excellent";
        case "A":
            return "Very Good";
        case "B":
            return "Good";
        case "C":
            return "Satisfactory";
        case "D":
            return "Average";
        default:
            return "Fail";
    }
}

function computeGrade(percentage) {
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B";
    } else if (percentage >= 60) {
        return "C";
    } else if (percentage >= 50) {
        return "D";
    } else {
        return "Fail";
    }
}

function main() {
    var subject1 = parseFloat(prompt("Enter marks obtained in first subject:"));
    var subject2 = parseFloat(prompt("Enter marks obtained in second subject:"));
    var subject3 = parseFloat(prompt("Enter marks obtained in third subject:"));
    var totalMarks = parseFloat(prompt("Enter total marks:"));

    var totalObtainedMarks = subject1 + subject2 + subject3;
    var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
    var grade = computeGrade(percentage);
    var remarks = computeGradeRemarks(grade);

    console.log("\nTotal Marks: " + (3 * totalMarks));
    console.log("Marks Obtained: " + totalObtainedMarks);
    console.log("Percentage: " + percentage);
    console.log("Grade: " + grade);
    console.log("Remarks: " + remarks);

}

main();

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess matches the secret number or is close to it
if (userGuess === secretNumber) {
    console.log("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    console.log("Close enough to the correct answer");
} else {
    console.log("Sorry, incorrect guess. The secret number was " + secretNumber);
}

function checkDivisibilityBy3(number) {
    if (number % 3 === 0) {
        console.log(number + " is divisible by 3");
    } else {
        console.log(number + " is not divisible by 3");
    }
}

// Example usage:
var userNumber = parseInt(prompt("Enter a number to check its divisibility by 3:"));
checkDivisibilityBy3(userNumber);

function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + " is an even number");
    } else {
        console.log(number + " is an odd number");
    }
}

// Example usage:
var userInput = parseInt(prompt("Enter a number to check if it's even or odd:"));
checkEvenOrOdd(userInput);

function weatherMessage(temperature) {
    if (temperature > 40) {
        console.log("It is too hot outside.");
    } else if (temperature > 30) {
        console.log("The Weather today is Normal.");
    } else if (temperature > 20) {
        console.log("Today’s Weather is cool.");
    } else if (temperature > 10) {
        console.log("OMG! Today’s weather is so Cool.");
    } else {
        console.log("The temperature is below 10 degrees.");
    }
}

// Example usage:
var inputTemperature = parseFloat(prompt("Enter the temperature:"));
weatherMessage(inputTemperature);

function calculator(num1, num2, operation) {
    if (operation === '+') {
        return num1 + num2;
    } else if (operation === '-') {
        return num1 - num2;
    } else if (operation === '*') {
        return num1 * num2;
    } else if (operation === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return "Error: Division by zero";
        }
    } else if (operation === '%') {
        if (num2 !== 0) {
            return num1 % num2;
        } else {
            return "Error: Modulo by zero";
        }
    } else {
        return "Error: Invalid operation";
    }
}

// Example usage:
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

var result = calculator(firstNumber, secondNumber, operation);
console.log("Result:", result);
