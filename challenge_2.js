const prompt = require("prompt-sync")();
//we initialize the necessary variables
const limit = 70; //this is the maximum allowed speed limit
let totalPoints = 0; //these are the total points which on start it 0
const demeritPoints = 12; //these are the maximum points a user can accumulate before their license is suspended
const suspendMsg = "License Suspended"; //the license suspended message

//function that returns a message according to the speed
function getStatus() {
  //statements which ensures that the program runs until the total points ares more than the demerit points
  while (totalPoints <= demeritPoints) {
    let speed = prompt("Enter the speed: "); //prompt the user to enter the speed
    //checks if the speed is less than the allowed speed of 70
    if (speed <= limit) {
      console.log("OK");
      condition = prompt("Do you want to continue? "); //asks the user if they want to continue on
      if (
        condition.toLowerCase() === "yes" ||
        condition.toLowerCase() === "y"
      ) {
        continue; //if the user types yes or y the loop starts over
      } else {
        break; //if the user types any other thing the loop breaks
      }
    } else {
      let currentPoints = (speed - limit) / 5; //we calculate the current points for every 5km/h above the speed limit of 70
      totalPoints += currentPoints; //we add the current points calculated above to the total points
      //statement that runs if the total points are less than ir equal to the demerit points
      if (totalPoints <= demeritPoints) {
        console.log(`Points: ${currentPoints}`); //we display the points calculated from the speed entered
        console.log(`Total Points: ${totalPoints}`);
        condition = prompt("Do you want to continue? ");
        if (
          condition.toLowerCase() === "yes" ||
          condition.toLowerCase() === "y"
        ) {
          continue; //if the user chooses to continue the loop starts over
        } else {
          console.log(`Total Points: ${totalPoints}`); //logs the total points to the user after they choose to stop the program
          break;
        }
      } else {
        console.log(`Points: ${currentPoints}`); //we display the points calculated from the speed that caused the total points to surpass the allowed demerit points
        console.log(`Total Points: ${totalPoints}`); //else statement if the total points are more than the demerit points
        console.log(suspendMsg); //prints out the license suspended message
      }
    }
  }
}
//invoke the function that runs the program
getStatus();
