
let currentDate = new Date();
let currentMonth = currentDate.getMonth() + 1;
let currentYear = currentDate.getFullYear();

let monthOFBirth = prompt("month of birth in number form");
let yearOfBirth = prompt("type in the year of your birth");

let secInMonth = 60 * 60 * 24 * 30;
let secInYear = secInMonth * 12;

let secondsInYears = secInYear * (currentYear - yearOfBirth);
let birthYear = secInMonth * (12 - monthOFBirth);
let secondsCurrent = secInMonth * currentMonth;

let secSinceBirth = birthYear + secondsInYears + secondsCurrent;

document.write(" You have lived about " + secSinceBirth + " seconds !!!");

