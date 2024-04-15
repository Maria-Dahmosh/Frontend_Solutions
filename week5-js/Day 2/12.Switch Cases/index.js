//Switch cases

//1
const dayOfWeek = 7;
switch (dayOfWeek) {
  case 1:
    console.log("Sunday movie:MISSION: IMPOSSIBLE - DEAD RECKONING PART ONE");
    break;
  case 2:
    console.log("Monday movie: KILLERS OF THE FLOWER MOON");
    break;
  case 3:
    console.log("Tuesday movie: BARBIE");
    break;
  case 4:
    console.log("Wednesday movie: JOHN WICK: CHAPTER 4");
    break;
  case 1:
    console.log("Thursday movie: AIR");
    break;
  case 6:
  case 7:
    console.log("Weekend movie: OPPENHEIMER");
    break;
}

//2
const themeColor = "light";
switch (themeColor) {
  case "light":
    console.log("The theme color is light");

    break;

  case "dark":
    console.log("The theme color is dark");

    break;

  case "night":
    console.log("The theme color is night");
    break;

  default:
    console.log("Unsupported theme color!");
}

//3
const notificationStatus = "new";
switch (notificationStatus) {
  case "new":
    console.log("You have new movie notifications!");
    break;

  case "unread":
    console.log("You have unread movie notifications!");
    break;

  case "unopened":
    console.log("You have unopened movie notifications!");
    break;
  default:
    console.log("You have read movie notifications!");
}

//4
const movieRating = "Pg-13";
switch (movieRating) {
  case "G":
    console.log(
      "The movie is rated G, suitable for general audiences of all ages."
    );
    break;

  case "PG":
    console.log(
      "The movie is rated PG, suggesting parental guidance may be needed for younger viewers."
    );
    break;

  case "Pg-13":
    console.log(
      "The movie is rated PG-13, indicating that some material may be inappropriate for children under 13. Parental guidance is suggested."
    );
    break;

  case "R":
    console.log(
      "The movie is rated R, restricting admission to viewers under 17 unless accompanied by a parent or adult guardian."
    );
    break;

  case "NC-17":
    console.log(
      "The movie is rated NC-17, meaning that it is intended for adult audiences only. No one 17 and under will be admitted."
    );
    break;
}

//5
const audienceScore = 1;

switch (audienceScore) {
  case audienceScore >= 90:
    console.log("Must Watch!");
    break;

  case audienceScore >= 75 && audienceScore <= 89:
    console.log("Recommended!");
    break;

  case audienceScore >= 60 && audienceScore <= 64:
    console.log("Mixed Reviews");
    break;
  default:
    console.log("Skip it!");
}

//6
const userInput = true;
switch (typeof userInput) {
  case "number":
    console.log("userInput is a number");
    break;

  case "string":
    console.log("userInput is a number");
    break;

  case "boolean":
    console.log("userInput is a boolean");
    break;
  case "undefined":
    console.log("userInput is a undefined");
    break;
  default:
    console.log("object or function");
}

//7
const releaseMonth = 3;
switch (Math.floor((releaseMonth - 0.5) / 3)) {
  case 0:
    console.log("The movie was released in Q1");
    break;
  case 1:
    console.log("The movie was released in Q2");
    break;

  case 2:
    console.log("The movie was released in Q3");
    break;
  case 3:
    console.log("The movie was released in Q4");
    break;
}
