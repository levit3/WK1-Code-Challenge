//we prompt the user to enter the speed
let carSpeed = prompt("Enter speed");
//we initialize the necessary variables
const limit = 70;
const demeritPoints = 12;
const suspendMsg = "License Suspended";

//function that returns a message according to the speed
function getStatus(speed) {
  //a statement that displays the message "Ok" if the speed is below 70
  if (speed < 70) {
    return function () {
      return "OK";
    };
  }
  //statement that runs if the speed is greater than the allowed speed, 70
  else {
    //calculates a point for every 5km/h above the required limit of 70
    let userPoints = (speed - 70) / 5;
    //return an anonymous function that checks if the points are less than the demerit points and if true returns the points
    return function licenseStatus() {
      if (userPoints <= 12) {
        return `Points: ${userPoints}`;
      }
      //statement that checks if the points are more than the demerit points of 12 returns the suspend message and the points
      else {
        return [`Points: ${userPoints}`, suspendMsg];
      }
    };
  }
}
//invoke the function that runs the program
getStatus(carSpeed)();
