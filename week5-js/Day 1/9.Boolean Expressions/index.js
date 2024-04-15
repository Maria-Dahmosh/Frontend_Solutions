//1
const isSunny = true;
const isWeekend = false;

console.log(`The result of isSunny && isWeekend is: ${isSunny && isWeekend}.`);

//2
const age = 20;
const license = true;
if (age > 18 && license) {
  console.log("The person is over 18 and has a driving license");
} else if (age > 18 && !license) {
  console.log("The person is over 18 and doesn't have a driving license");
} else {
  console.log("The person is under 18 and doesn't have a driving license");
}

//3
const knowsJavaScript = false;
const knowsPython = true;
console.log(
  `Does the person knows JS either Python: ${knowsJavaScript || knowsPython}.`
);

//4
const isRaining = true;
console.log(`The value of !isRaining is: ${!isRaining}.`);

//5
const likeMusic = true;
const playsGuitar = false;
const hasTime = false;
if ((likeMusic && playsGuitar) || hasTime) {
  console.log("The person like music and plays guitar OR have time to learn");
} else {
  console.log(`He like music:${likeMusic} 
  He plays guitar:${playsGuitar}
  He has time to learn: ${hasTime}.`);
}

//6
const personAge = 15;

console.log(
  `personAge is ${personAge > 18 ? "greater than 18" : "less than 18"}`
);

//7
const currentTemperature = 25;
console.log(
  `The current Temperature is ${
    currentTemperature < 20 ? "less than 20" : "greater than 20"
  } and ${currentTemperature > 30 ? "greater than 30" : "less than 30"}`
);

//8
const firstNumber = 10;
const secondNumber = "10";
console.log(`Is firstNumber==secondNumber: ${firstNumber == secondNumber}`);

console.log(`Is firstNumber===secondNumber: ${firstNumber === secondNumber}`);

//9
const budget = 500;
const expense = 750;
if (expense <= budget) {
  console.log("The expense is less than or equal to the budget ");
} else {
  console.log("The expense is greater than the budget ");
}

//10
const person1Height = 170;
const person2Height = 165;
if (person1Height === person2Height) {
  console.log("person1Height is equal to person2Height");
} else {
  console.log(
    `${
      person1Height > person2Height
        ? "person1Height is grater than person2Height"
        : "person1Height is less than person2Height"
    }`
  );
}
