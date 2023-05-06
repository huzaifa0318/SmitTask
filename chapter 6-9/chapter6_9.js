// // // task 1
// var num = 7;

// document.write("Result:<br>");
// document.write("The value of num is: " + num + "<br>");
// document.write("------------------------------<br>");

// num++;

// document.write("The value of ++num is: " + num + "<br>");
// document.write("Now the value of num is: " + num + "<br>");
// document.write("<br>");

// document.write("The value of num++ is: " + num++ + "<br>");
// document.write("Now the value of num is: " + num + "<br>");
// document.write("<br>");

// num--;

// document.write("The value of --num is: " + num + "<br>");
// document.write("Now the value of num is: " + num + "<br>");
// document.write("<br>");

// document.write("The value of num-- is: " + num-- + "<br>");
// document.write("Now the value of num is: " + num + "<br>");







// // task 2
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;






// // task 3
// var name = prompt("Please enter your name:");
// console.log("Hello, " + name + "!");






// // task 4
// let num = prompt("Please enter a number:");

// if (num === null || isNaN(num)) {
//   num = 5;
// }

// document.write("<h2>Multiplication Table of " + num + "</h2>");

// for (let i = 1; i <= 10; i++) {
//   document.write(num + " x " + i + " = " + (num * i) + "<br>");
// }







// // task 6
// var subject1 = prompt("Enter subject 1 name:");
// var subject2 = prompt("Enter subject 2 name:");
// var subject3 = prompt("Enter subject 3 name:");

// var totalMarks = 100;

// var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1));
// var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2));
// var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3));

// var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
// var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// document.write("<table>");
// document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
// document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td></tr>");
// document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td></tr>");
// document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td></tr>");
// document.write("<tr><th>Total</th><th>" + (totalMarks * 3) + "</th><th>" + totalObtainedMarks + "</th></tr>");
// document.write("<tr><th></th><th>Percentage</th><th>" + percentage.toFixed(2) + "%</th></tr>");
// document.write("</table>");
