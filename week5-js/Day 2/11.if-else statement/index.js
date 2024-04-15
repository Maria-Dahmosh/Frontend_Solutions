//1
const movieRating = 8;
if (movieRating > 7) {
  console.log("Highly rated movie");
} else {
  console.log("This movie has room for improvement");
}

//2
const movieBudget = 3; //movieBudget should be in millions
if (movieBudget > 1 && movieBudget < 100) {
  console.log("Big-Budget Movie");
} else {
  console.log("Indie movie");
}

//3
const movieGenre = "a";
const audienceAge = 15;

if (movieGenre === "Horror") {
  if (audienceAge >= 18) console.log("Suitable for the audience");
  else console.log("Not suitable for the audience");
} else console.log("Suitable for all audience");

//4
const firstMovieDuration = 110;
const SecondMovieDuration = 140;
if (firstMovieDuration != SecondMovieDuration) {
  if (firstMovieDuration > SecondMovieDuration)
    console.log("The first movie is longer");
  else console.log("The second movie is longer");
} else console.log("Movies have the same duration");

//5
const viewerAge = 20;
if (viewerAge >= 13 && viewerAge <= 18) console.log("Suitable for teens");
else if (viewerAge > 18) console.log("Suitable for adults");
else console.log("Suitable for kids");

//6
const popularityScore = 90;
popularityScore >= 80
  ? console.log("Popular Movie")
  : console.log("Less Known Movie");

//7
const numOfAwards = 4;
numOfAwards % 2 === 0
  ? console.log("Even number of awards")
  : console.log("Odd number of awards");

//8
const actorAge = 2;
actorAge < 14
  ? console.log("Child Actor")
  : actorAge > 14 && actorAge < 24
  ? console.log("Young Actor")
  : console.log("25 and above");

//9
const hasInvitation = false;
hasInvitation
  ? console.log("Welcome to the premiere")
  : console.log("Please check your invitation");

//10
const screeningDuration = 20;

if (screeningDuration < 40) console.log("Short Film");
else if (screeningDuration > 40 && screeningDuration < 120)
  console.log("Feature Film");
else console.log("Epic length Film");

//11
const dayOfWeek = "Monday";
if (dayOfWeek === "Saturday") console.log("Special screening event!");
else console.log("Reugular movie showtime");

//12
const releaseYear = 1900;
if (releaseYear >= 2001 && releaseYear <= 2100)
  console.log("21st century movie");
else console.log("20th century movie");

//13
if (movieGenre === "Action" && movieRating >= 7) console.log("Must Watch");
else console.log("check review before watching");

//14
const ticketPrice = 140;
if (ticketPrice <= 10) console.log("Discounted ticket");
else console.log("Regular ticket price");

//15
const age = 24;
const isAdult = true;
if (age >= 18 || isAdult) console.log("Allowed to watch");
else console.log("Age-restricted content");

//16
const movieTitle = "The notebook 2";
if (movieTitle.indexOf("2") > -1 || movieTitle.indexOf("part") > -1) {
  console.log("This movie is a sequel");
} else console.log("This movie is not a sequel");
