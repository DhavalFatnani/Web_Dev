const readlineSync = require("readline-sync");

function millisecondsToYears(milliseconds) {
  //   const secondsInYear = 31536000;
  //   const seconds = milliseconds / 1000;

  let years = milliseconds / (1000 * 60 * 60 * 24 * 365);

  years -= 2 / 12;

  return years;
}

const userName = readlineSync.question("What is your Name? ");
const userDOB = readlineSync.question("May I know your Date of Birth? ");
const currentDate = new Date();
currentDate.setUTCFullYear(currentDate.getUTCFullYear() - 2);
const userAge = Math.ceil(
  millisecondsToYears(currentDate.getTime() - new Date(userDOB).getTime())
);

console.log(`Hey, ${userName}!`);
console.log(`is your DOB: ${userDOB}.`);
console.log(`Nooooo, that can't be true, You're ${userAge}!`);
