//This is a script that prompts user input for student's marks and outputs the grade

//Prompting the user for input

const studMarks = prompt("Please enter the students marks");

//Creating an function that outputs the grade per the score

function studentGrade(marks) {
  //Creating an if statement that returns the grade and ensures marks input doesn't exceed 100
  if (marks > 79 && marks <= 100) {
    return "A";
  } else if (marks >= 60 && marks <= 79) {
    return "B";
  } else if (marks >= 49 && marks <= 59) {
    return "C";
  } else if (marks >= 40 && marks < 49) {
    return "D";
    //Ensures that the marks input isn't below 0
  } else if (marks < 40 && marks >= 0) {
    return "E";
  } else {
    return "out of range";
  }
}

//invoke the function that runs the program
studentGrade(studMarks);
