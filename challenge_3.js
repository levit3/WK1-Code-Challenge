const prompt = require("prompt-sync")();

//initializing the necessary variables
const basicSalary = parseInt(prompt("Enter your basic salary: "));
const benefits = parseInt(prompt("Enter your benefits: "));
//calculating the gross salary from basic salary and benefits inputted above
const grossSalary = basicSalary + benefits;
console.log(`grossSalary: ${grossSalary}`);
let payee;
let nhif;
let nssf;

//creating a function that embeds all the deduction functions
function getNetSalary() {
  //function that calculates the payee(Tax) as per the basic salary initiated above
  function getPayee() {
    if (grossSalary <= 24000) {
      payee = 0.1 * grossSalary;
    } else if (grossSalary <= 32333) {
      payee = 0.25 * grossSalary;
    } else if (grossSalary <= 500000) {
      payee = 0.3 * grossSalary;
    } else if (grossSalary <= 800000) {
      payee = 0.325 * grossSalary;
    } else {
      payee = 0.35 * grossSalary;
    }
    return payee;
  }
  //function that gets the NHIF taxas per the gross salary
  function getNHIF() {
    if (grossSalary < 6000) {
      nhif = 150;
    } else if (grossSalary >= 6000 && grossSalary < 8000) {
      nhif = 300;
    } else if (grossSalary >= 8000 && grossSalary < 12000) {
      nhif = 400;
    } else if (grossSalary >= 12000 && grossSalary < 15000) {
      nhif = 500;
    } else if (grossSalary >= 15000 && grossSalary < 20000) {
      nhif = 600;
    } else if (grossSalary >= 20000 && grossSalary < 25000) {
      nhif = 750;
    } else if (grossSalary >= 25000 && grossSalary < 30000) {
      nhif = 850;
    } else if (grossSalary >= 30000 && grossSalary < 35000) {
      nhif = 900;
    } else if (grossSalary >= 35000 && grossSalary < 40000) {
      nhif = 950;
    } else if (grossSalary >= 40000 && grossSalary < 45000) {
      nhif = 1000;
    } else if (grossSalary >= 45000 && grossSalary < 50000) {
      nhif = 1100;
    } else if (grossSalary >= 50000 && grossSalary < 60000) {
      nhif = 1200;
    } else if (grossSalary >= 60000 && grossSalary < 70000) {
      nhif = 1300;
    } else if (grossSalary >= 70000 && grossSalary < 80000) {
      nhif = 1400;
    } else if (grossSalary >= 80000 && grossSalary < 90000) {
      nhif = 1500;
    } else if (grossSalary >= 90000 && grossSalary < 100000) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }
    return nhif;
    //calculates the nssf tax
  }
  function getNSSF() {
    nssf = 0.06 * grossSalary;
    return nssf;
  }
  //here we return an embedded function that calculates the net salary and returns the net salary, nhif tax, nssf tax and the paye tax
  return function () {
    //calculates the net salary using the return values of the respective functions above
    let netSalary = grossSalary - (getPayee() + getNHIF() + getNSSF());
    //we return the net salary, nhif tax, nssf tax and the paye tax
    console.log(`Payee: ${getPayee()}`);
    console.log(`NHIF: ${getNHIF()}`);
    console.log(`NSSF: ${getNSSF()}`);
    console.log(`Net Salary: ${netSalary}`);
    return [getPayee(), getNHIF(), getNSSF(), netSalary];
  };
}
//we invoke the function that runs all the functions created above
getNetSalary()();
