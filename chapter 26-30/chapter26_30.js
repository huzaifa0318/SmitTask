// // task 1
// // var num = parseInt(prompt("Enter a positive integer:"));
// // if (isNaN(num) || num < 1) {
// //   document.write("Invalid input. Please enter a positive integer.");
// // } else {
// //   document.write("Number: " + num + "<br>");

// //   // round off value
// //   var roundNum = Math.round(num);
// //   document.write("Round off value: " + roundNum + "<br>");

// //   // floor value
// //   var floorNum = Math.floor(num);
// //   document.write("Floor value: " + floorNum + "<br>");

// //   // ceil value
// //   var ceilNum = Math.ceil(num);
// //   document.write("Ceil value: " + ceilNum);
// // }






// // task 2
// // var num = parseFloat(prompt("Enter a negative floating-point number:"));

// // document.write("<h3>Number: " + num + "</h3>");
// // document.write("<h3>Round off value: " + Math.round(num) + "</h3>");
// // document.write("<h3>Floor value: " + Math.floor(num) + "</h3>");
// // document.write("<h3>Ceil value: " + Math.ceil(num) + "</h3>");






// // task 3
// // var num = -4;
// // var absoluteValue = Math.abs(num);
// // console.log("Absolute value of " + num + " is " + absoluteValue);







// // task 4
// // var diceValue = Math.floor(Math.random() * 6) + 1;
// // document.write("The value of the dice is: " + diceValue);






// // task 5
// // var randomNum = Math.random();
// // var result = (randomNum < 0.5) ? 'Heads' : 'Tails';
// // console.log(`The coin landed on ${result}.`);








// // task 6
// // var randomNumber = Math.floor(Math.random() * 100) + 1;
// // document.write("Random number between 1 and 100: " + randomNumber);







// // task 7
// function convertWeight() {
// 			var weightInput = document.getElementById("weightInput").value;
// 			var weight = parseFloat(weightInput);

// 			if (isNaN(weight)) {
// 				document.getElementById("result").innerHTML = "Invalid input";
// 				return;
// 			}

// 			var unit = weightInput.replace(weight.toString(), "").trim().toLowerCase();
// 			if (unit === "kg" || unit === "kgs" || unit === "kilogram" || unit === "kilograms") {
// 				weight = weight.toFixed(2) + " kilograms";
// 			} else if (unit === "lb" || unit === "lbs" || unit === "pound" || unit === "pounds") {
// 				weight = (weight * 0.45359237).toFixed(2) + " kilograms";
// 			} else {
// 				weight = weight + " kilograms";
// 			}

// 			document.getElementById("result").innerHTML = "Your weight is " + weight;
// 		}








// // task 8
		// var secretNumber = Math.floor(Math.random() * 10) + 1;
// 		// var userInput = prompt("Guess the secret number between 1 and 10:");
// 		// if (userInput == secretNumber) {
// 		// 	alert("Congratulations! You guessed the secret number!");
// 		// } else {
// 		// 	alert("Sorry, the secret number was " + secretNumber + ".");
// 		// }