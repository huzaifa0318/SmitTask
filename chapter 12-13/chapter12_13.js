// task 1
// var char = prompt("Enter a character:");
// var ascii = char.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//   console.log("The input is a number");
// } else if (ascii >= 65 && ascii <= 90) {
//   console.log("The input is an uppercase letter");
// } else if (ascii >= 97 && ascii <= 122) {
//   console.log("The input is a lowercase letter");
// } else {
//   console.log("The input is not a number or letter");
// }


// task 2
// var num1 = parseInt(prompt("Enter the first integer:"));
// var num2 = parseInt(prompt("Enter the second integer:"));

// if (num1 > num2) {
//   console.log(num1 + " is larger than " + num2);
// } else if (num2 > num1) {
//   console.log(num2 + " is larger than " + num1);
// } else {
//   console.log("Both numbers are equal.");
// }






// task 3
// var number = parseFloat(prompt("Enter a number:"));

// if (number > 0) {
//     console.log(number + " is a positive number.");
// } else if (number < 0) {
//     console.log(number + " is a negative number.");
// } else {
//     console.log("The number is 0.");
// }





// task 4
// var character = prompt("Enter a character:").toLowerCase();

// if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
//   console.log(character + " is a vowel.");
// } else {
//   console.log(character + " is not a vowel.");
// }





// task 5
// Step 1: Store correct password in a variable
// var correctPassword = "myPassword123";
// var userPassword = prompt("Enter your password:");

// if (userPassword === "") {
//   // Substep 3i: Check if user has entered password
//   alert("Please enter your password");
// } else if (userPassword === correctPassword) {
//   // Substep 3ii: Check if passwords are same
//   alert("Correct! The password you entered matches the original password");
// } else {
//   alert("Incorrect password");
// }





// task 6
// var greeting;
// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }





// task 7
// var time = prompt("Enter time in 24-hour format (e.g. 1900):");
// var hour = parseInt(time.substring(0, 2));
// var minute = time.substring(2);

// var greeting;
// if (hour >= 0 && hour < 12) {
//   greeting = "Good morning";
// } else if (hour >= 12 && hour < 18) {
//   greeting = "Good afternoon";
// } else {
//   greeting = "Good evening";
//   hour -= 12;
// }

// if (hour == 0) {
//   hour = 12;
// }

// alert(`${greeting}! The time is ${hour}:${minute} ${(hour < 12 || hour == 24) ? 'AM' : 'PM'}`);
