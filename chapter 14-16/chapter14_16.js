// // task 1
// var studentNames = [];
// console.log(studentNames)




// // tsk 2
// var students = new Array();
// console.log(students)




// // task 3
// var colors = ["red", "green", "blue"];
// console.log(colors)




// // task 4
// var numbers = [1, 2, 3, 4, 5];
// console.log(numbers)





// // task 5
// var booleanArray = [true, false, true, true];
// console.log(booleanArray)






// // task 6
// var mixedArray = ['John', 25, true, 'London'];
// console.log(mixedArray)






// // task 7
// var qualifications = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];

// console.log("<h3>Qualifications:</h3>");

// for(var i = 0; i < qualifications.length; i++){
//     console.log((i+1) + ") " + qualifications[i] + "<br>");
// }










// // task 8
// var studentNames = ['John', 'Alice', 'Bob'];
// var studentScores = [380, 420, 450];

// var totalMarks = 500;
// var studentPercentages = [];
// for (var i = 0; i < studentScores.length; i++) {
//   studentPercentages.push((studentScores[i] / totalMarks) * 100);
// }
// for (var i = 0; i < studentNames.length; i++) {
//   document.write('Score of ' + studentNames[i] + ' is ' + studentScores[i] + '. Percentage: ' + studentPercentages[i] + '%<br>');
// }





// // task 9
// var colorNames = ["Red", "Green", "Blue"];

// document.write("<b>Original Array:</b> " + colorNames + "<br><br>");

// var colorToAdd = prompt("Enter a color name to add to the beginning of the array:");
// colorNames.unshift(colorToAdd);

// document.write("<b>After adding color to the beginning:</b> " + colorNames + "<br><br>");

// colorToAdd = prompt("Enter a color name to add to the end of the array:");
// colorNames.push(colorToAdd);
// document.write("<b>After adding color to the end:</b> " + colorNames + "<br><br>");

// colorNames.unshift("Yellow", "Purple");

// document.write("<b>After adding two more colors to the beginning:</b> " + colorNames + "<br><br>");

// colorNames.shift();

// document.write("<b>After deleting the first color:</b> " + colorNames + "<br><br>");

// colorNames.pop();

// document.write("<b>After deleting the last color:</b> " + colorNames + "<br><br>");

// var position = parseInt(prompt("Enter the position where you want to add a color:"));
// colorToAdd = prompt("Enter a color name to add at position " + position + ":");
// colorNames.splice(position - 1, 0, colorToAdd);

// document.write("<b>After adding a color at position " + position + ":</b> " + colorNames + "<br><br>");

// var index = parseInt(prompt("Enter the index where you want to start removing colors:"));
// var count = parseInt(prompt("Enter the number of colors you want to remove:"));
// colorNames.splice(index - 1, count);

// document.write("<b>After removing " + count + " color(s) from position " + index + ":</b> " + colorNames);








// // task 10
// var scores = [67, 85, 92, 78, 90];

// scores.sort(function(a, b) {
//   return a - b;
// });
// console.log("Sorted Scores:", scores);




// // task 11
// var cities = ["Karachi", "Lahore", "Islamabad", "Rawalpindi", "Faisalabad"];


// var selectedCities = [];


// selectedCities = cities.slice(1, 4);

// console.log("Cities: " + cities);
// console.log("Selected cities: " + selectedCities);





// // task 12
// var arr = ["This", "is", "my", "cat"];
// var str = arr.join(" ");
// console.log(str);






// // task 13
// let queue = [];
// queue.push("keyboard");
// queue.push("mouse");
// queue.push("printer");
// queue.push("monitor");
// let first = queue.shift();

// console.log(first); // "apple"
// console.log(queue); // ["banana", "cherry"]
