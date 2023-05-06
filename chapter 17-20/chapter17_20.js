
// // task 1
// var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(matrix)





// // task 2
// for(let i = 1; i <= 10; i++) {
//     console.log(i);
//   }




//   // task 4
//   var tableNumber = parseInt(prompt("Enter the number you want to create a multiplication table for:"));
// var tableLength = parseInt(prompt("Enter the length of the multiplication table:"));

// for(let i = 1; i <= tableLength; i++) {
//   let result = tableNumber * i;
//   console.log(`${tableNumber} x ${i} = ${result}`);
// }




// // task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }




// // task 6
// var counting = "";
// for(let i = 1; i <= 15; i++) {
//   counting += i + ", ";
// }
// console.log("Counting: " + counting.slice(0, -2));

// var reverseCounting = "";
// for(let i = 10; i >= 1; i--) {
//   reverseCounting += i + ", ";
// }
// console.log("Reverse counting: " + reverseCounting.slice(0, -2));

// var even = "";
// for(var i = 0; i <= 20; i += 2) {
//   even += i + ", ";
// }
// console.log("Even: " + even.slice(0, -2));
// var odd = "";
// for(var i = 1; i <= 19; i += 2) {
//   odd += i + ", ";
// }
// console.log("Odd: " + odd.slice(0, -2));
// var series = "";
// for(var i = 1; i <= 10; i++) {
//   series += i*2 + "k, ";
// }
// console.log("Series: " + series.slice(0, -2));



// // task 7
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter the item you want to search:");

// var found = false;
// for(var i = 0; i < A.length; i++) {
//   if(userInput === A[i]) {
//     found = true;
//     break;
//   }
// }

// if(found) {
//   console.log(userInput + " is available at index " + A.indexOf(userInput) + " in our bakery");
// } else {
//   console.log("We are sorry, " + userInput + " is not available in our bakery");
// }



// // task 8
// var A = [24, 53, 78, 91, 12];
// var max = A[0];

// for(var i = 1; i < A.length; i++) {
//   if(A[i] > max) {
//     max = A[i];
//   }
// }

// console.log("The largest number in the array is " + max);


// // task 9
// var A = [24, 53, 78, 91, 12];
// var min = A[0];

// for(var i = 1; i < A.length; i++) {
//   if(A[i] < min) {
//     min = A[i];
//   }
// }

// console.log("The smallest number in the array is " + min);
