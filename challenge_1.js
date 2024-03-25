//This is a script that prompts user input for student's marks and outputs the grade

//Prompting the user for input
const prompt = require("prompt-sync")();
const studMarks = prompt("Enter the students marks: ");

//Creating an function that outputs the grade per the score

function studentGrade(marks) {
  //Creating an if statement that returns the grade and ensures marks input doesn't exceed 100
  if (marks > 79 && marks <= 100) {
    let grade = "A"; //assigns the students grade to the variable "grade"
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 60 && marks <= 79) {
    let grade = "B";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 49 && marks <= 59) {
    let grade = "C";
    console.log(`Grade: ${grade}`);
    return grade;
  } else if (marks >= 40 && marks < 49) {
    let grade = "D";
    console.log(`Grade: ${grade}`);
    return grade;
    //Ensures that the marks input isn't below 0
  } else if (marks < 40 && marks >= 0) {
    let grade = "E";
    console.log(`Grade: ${grade}`);
    return grade;
  } else {
    console.log("out of range"); //message that's shown if any other value other than a number is entered or is out of the allowed range
  }
}

//invoke the function that runs the program
studentGrade(studMarks);
