//1  The output you're seeing is in ISO 8601 format
const currentDate = new Date();
console.log(currentDate);

//2
const currentYear = currentDate.getFullYear();
console.log(currentYear);

//3 3 for April
const currentMonth = currentDate.getMonth();
console.log(currentMonth);

//4
const currentDay = currentDate.getDate();
console.log(currentDay);

//5  1 for Monday
const currentWeekDay = currentDate.getDay();
console.log(currentWeekDay);

//6
const currentHour = currentDate.getHours();
const currentMinute = currentDate.getMinutes();
const currentSecond = currentDate.getSeconds();
console.log(currentSecond);
console.log(
  `Hours:${currentHour}, Minutes:${currentMinute}, Seconds:${currentSecond}`
);

//7
const numOfDays = new Date(currentYear, currentMonth + 1, 0).getDate();
console.log(`${numOfDays}`);

//8

currentDate.setDate(currentDate.getDate() + 1);

const tomorrowDate = currentDate;
console.log(tomorrowDate);

//9

const totalMinutes = 90;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`90 minutes is equal to ${hours} hours and ${minutes} minutes`);
