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

// function welcomeUser(cityName) {
//     if (cityName.toLowerCase() === "karachi") {
//         console.log("Welcome to the city of lights!");
//     } else {
//         console.log("Welcome to " + cityName + "!");
//     }
// }

// function main() {
//     var city = prompt("Enter the name of your city:");
//     welcomeUser(city);
// }

// main();

// function greetUser(gender) {
//     if (gender.toLowerCase() === "male") {
//         console.log("Good Morning Sir.");
//     } else if (gender.toLowerCase() === "female") {
//         console.log("Good Morning Ma'am.");
//     } else {
//         console.log("Good Morning!");
//     }
// }

// function main() {
//     var gender = prompt("Enter your gender (male/female):");
//     greetUser(gender);
// }

// main();

// function trafficSignal(color) {
//     switch(color.toLowerCase()) {
//         case "red":
//             console.log("Must Stop");
//             break;
//         case "yellow":
//             console.log("Ready to move");
//             break;
//         case "green":
//             console.log("Move now");
//             break;
//         default:
//             console.log("Invalid color");
//     }
// }

// function main() {
//     var color = prompt("Enter the color of the traffic signal:");
//     trafficSignal(color);
// }

// main();

// function checkFuelLevel(fuel) {
//     if (fuel < 0.25) {
//         console.log("Please refill the fuel in your car");
//     } else {
//         console.log("Your fuel level is sufficient");
//     }
// }

// function main() {
//     var fuel = parseFloat(prompt("Enter the remaining fuel in your car (in litres):"));
//     checkFuelLevel(fuel);
// }

// main();



// var a = 4;
// if (++a === 5){
//     alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
//     alert("given condition for variable b is true");
// }

// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// }
// if (c === 13){
//     alert("condition 2 is true");
// }
// if (++c < 14){
//     alert("condition 3 is true");
// }
// if(c === 14){
//     alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     alert("The cost equals");
// }

// if (true){
//     alert("True");
// }
// if (false){
//     alert("False");
// }
// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

// function computeGrade(percentage) {
//     if (percentage >= 90) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 50) {
//         return "D";
//     } else {
//         return "Fail";
//     }
// }

// function main() {
//     var subject1 = parseFloat(prompt("Enter marks obtained in first subject:"));
//     var subject2 = parseFloat(prompt("Enter marks obtained in second subject:"));
//     var subject3 = parseFloat(prompt("Enter marks obtained in third subject:"));
//     var totalMarks = parseFloat(prompt("Enter total marks:"));

//     var totalObtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
//     var grade = computeGrade(percentage);

//     console.log("\nTotal Marks: " + (3 * totalMarks));
//     console.log("Marks Obtained: " + totalObtainedMarks);
//     console.log("Percentage: " + percentage);
//     console.log("Grade: " + grade);
// }

// main();

// function computeGradeRemarks(grade) {
//     switch (grade) {
//         case "A+":
//             return "Excellent";
//         case "A":
//             return "Very Good";
//         case "B":
//             return "Good";
//         case "C":
//             return "Satisfactory";
//         case "D":
//             return "Average";
//         default:
//             return "Fail";
//     }
// }

// function computeGrade(percentage) {
//     if (percentage >= 90) {
//         return "A+";
//     } else if (percentage >= 80) {
//         return "A";
//     } else if (percentage >= 70) {
//         return "B";
//     } else if (percentage >= 60) {
//         return "C";
//     } else if (percentage >= 50) {
//         return "D";
//     } else {
//         return "Fail";
//     }
// }

// function main() {
//     var subject1 = parseFloat(prompt("Enter marks obtained in first subject:"));
//     var subject2 = parseFloat(prompt("Enter marks obtained in second subject:"));
//     var subject3 = parseFloat(prompt("Enter marks obtained in third subject:"));
//     var totalMarks = parseFloat(prompt("Enter total marks:"));

//     var totalObtainedMarks = subject1 + subject2 + subject3;
//     var percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;
//     var grade = computeGrade(percentage);
//     var remarks = computeGradeRemarks(grade);

//     console.log("\nTotal Marks: " + (3 * totalMarks));
//     console.log("Marks Obtained: " + totalObtainedMarks);
//     console.log("Percentage: " + percentage);
//     console.log("Grade: " + grade);
//     console.log("Remarks: " + remarks);

// }

// main();

// Generate a random secret number between 1 and 10
// var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
// var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// // Check if the user's guess matches the secret number or is close to it
// if (userGuess === secretNumber) {
//     console.log("Bingo! Correct answer");
// } else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
//     console.log("Close enough to the correct answer");
// } else {
//     console.log("Sorry, incorrect guess. The secret number was " + secretNumber);
// }

// function checkDivisibilityBy3(number) {
//     if (number % 3 === 0) {
//         console.log(number + " is divisible by 3");
//     } else {
//         console.log(number + " is not divisible by 3");
//     }
// }

// Example usage:
// var userNumber = parseInt(prompt("Enter a number to check its divisibility by 3:"));
// checkDivisibilityBy3(userNumber);

// function checkEvenOrOdd(number) {
//     if (number % 2 === 0) {
//         console.log(number + " is an even number");
//     } else {
//         console.log(number + " is an odd number");
//     }
// }

// Example usage:
// var userInput = parseInt(prompt("Enter a number to check if it's even or odd:"));
// checkEvenOrOdd(userInput);

// function weatherMessage(temperature) {
//     if (temperature > 40) {
//         console.log("It is too hot outside.");
//     } else if (temperature > 30) {
//         console.log("The Weather today is Normal.");
//     } else if (temperature > 20) {
//         console.log("Today’s Weather is cool.");
//     } else if (temperature > 10) {
//         console.log("OMG! Today’s weather is so Cool.");
//     } else {
//         console.log("The temperature is below 10 degrees.");
//     }
// }

// Example usage:
// var inputTemperature = parseFloat(prompt("Enter the temperature:"));
// weatherMessage(inputTemperature);

// function calculator(num1, num2, operation) {
//     if (operation === '+') {
//         return num1 + num2;
//     } else if (operation === '-') {
//         return num1 - num2;
//     } else if (operation === '*') {
//         return num1 * num2;
//     } else if (operation === '/') {
//         if (num2 !== 0) {
//             return num1 / num2;
//         } else {
//             return "Error: Division by zero";
//         }
//     } else if (operation === '%') {
//         if (num2 !== 0) {
//             return num1 % num2;
//         } else {
//             return "Error: Modulo by zero";
//         }
//     } else {
//         return "Error: Invalid operation";
//     }
// }

// Example usage:
// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");

// var result = calculator(firstNumber, secondNumber, operation);
// console.log("Result:", result);

function checkCharacterType(char) {
    if (char.length !== 1) {
        return "Please provide a single character.";
    }

    const asciiCode = char.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        return "The character is a number.";
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        return "The character is an uppercase letter.";
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        return "The character is a lowercase letter.";
    } else {
        return "The character is neither a number nor a letter.";
    }
}

// Example usage
let inputChar = 'A';
console.log(checkCharacterType(inputChar));  // The character is an uppercase letter.

inputChar = 'a';
console.log(checkCharacterType(inputChar));  // The character is a lowercase letter.

inputChar = '5';
console.log(checkCharacterType(inputChar));  // The character is a number.

inputChar = '@';
console.log(checkCharacterType(inputChar));  // The character is neither a number nor a letter.

var userPassword= prompt("Enter your password","");
if(userPassword==123){
    console.log("correct Password!");

}
else{
    console.log("invalid Password!" );

}
// Function to compare two integers
function compareIntegers() {
    // Prompt the user to enter the first integer
    let num1 = parseInt(prompt("Enter the first integer:"));
  
    // Check if the input is a valid integer
    if (isNaN(num1)) {
      console.log("The input is not a valid integer. Please enter a valid integer.");
      return;
    }
  
    // Prompt the user to enter the second integer
    let num2 = parseInt(prompt("Enter the second integer:"));
  
    // Check if the input is a valid integer
    if (isNaN(num2)) {
      console.log("The input is not a valid integer. Please enter a valid integer.");
      return;
    }
  
    // Compare the two integers and display the result
    if (num1 > num2) {
      console.log(`The larger number is: ${num1}`);
    } else if (num2 > num1) {
      console.log(`The larger number is: ${num2}`);
    } else {
      console.log("Both numbers are equal.");
    }
  }
  
  // Call the function to execute the comparison
  compareIntegers();
  // Function to check if a number is positive, negative, or zero
function checkNumber() {
    // Prompt the user to enter a number
    let num = parseFloat(prompt("Enter a number:"));
  
    // Check if the input is a valid number
    if (isNaN(num)) {
      console.log("The input is not a valid number. Please enter a valid number.");
      return;
    }
  
    // Check if the number is positive, negative, or zero
    if (num > 0) {
      console.log("The number is positive.");
    } else if (num < 0) {
      console.log("The number is negative.");
    } else {
      console.log("The number is zero.");
    }
  }
  
  // Call the function to execute the check
  checkNumber();

  // Function to check if a character is a vowel
function isVowel(char) {
    // Convert the character to lowercase to make the check case-insensitive
    char = char.toLowerCase();
  
    // List of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    // Check if the character is in the list of vowels
    return vowels.includes(char);
  }
  
  // Prompt the user to enter a single character
  let input = prompt("Enter a single character:");
  
  // Validate the input length
  if (input.length === 1) {
    // Check if the character is a vowel and display the result
    if (isVowel(input)) {
      console.log("True: The character is a vowel.");
    } else {
      console.log("False: The character is not a vowel.");
    }
  } else {
    console.log("Please enter a single character.");
  }
// Step a: Store the correct password in a variable
const correctPassword = "mySecret123";

// Step b: Ask the user to enter their password
const userPassword = prompt("Please enter your password:");

// Step c: Validate the entered password
if (userPassword === "") {
  // i. Check if the user has entered a password
  console.log("Please enter your password.");
} else {
  // ii. Check if both passwords are the same
  if (userPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
  } else {
    console.log("Incorrect password.");
  }
}
  
var greeting;
var hour = 13;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

console.log(greeting); // Outputs: Good day

function convertTime() {
    // Prompt the user to enter time in 24-hour format
    let time = parseInt(prompt("Enter time in 24-hour format (e.g., 1900 for 7 PM):"));
  
    // Check if the input is a valid number
    if (isNaN(time) || time < 0 || time >= 2400) {
      console.log("Please enter a valid time in 24-hour format (0000 to 2359).");
      return;
    }
  
    // Extract hours and minutes from the time input
    let hours = Math.floor(time / 100);
    let minutes = time % 100;
  
    // Validate minutes
    if (minutes >= 60) {
      console.log("Please enter a valid time in 24-hour format (e.g., 2359).");
      return;
    }
  
    // Determine AM or PM
    let period = hours < 12 ? "AM" : "PM";
  
    // Convert hours to 12-hour format
    if (hours === 0) {
      hours = 12; // Midnight case
    } else if (hours > 12) {
      hours -= 12; // Convert to PM
    }
  
    // Format minutes with leading zero if necessary
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  
    // Display the result
    console.log(`The time is ${hours}:${formattedMinutes} ${period}.`);
  }
  
  // Call the function to execute the conversion
  convertTime();
  
  
  
