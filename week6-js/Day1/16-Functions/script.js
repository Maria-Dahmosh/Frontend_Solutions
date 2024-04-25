// Impure Functions

//1
let movieRatings;
function initializeRatings() {
  movieRatings = [];
}
initializeRatings();
//2
function addRating(movieTitle, rating) {
  movieRatings.push([movieTitle, rating]);
}
const movieTitle = "The notebook";
const rating = 9;
addRating(movieTitle, rating);
console.log(movieRatings);

//3
function findRating(movieTitle) {
  for (i = 0; i < movieRatings.length; i++) {
    const movieName = movieRatings[i][0];
    const movieRating = movieRatings[i][1];
    if (movieName === movieTitle) {
      console.log("The rating of", movieName, "is:", movieRating);
      return;
    }
  }
  console.log("Movie wasn't found");
}
findRating(movieTitle);
//4
function updateRating(movieTitle, newRating) {
  for (i = 0; i < movieRatings.length; i++) {
    const movieName = movieRatings[i][0];
    const movieRating = movieRatings[i][1];
    if (movieName === movieTitle) {
      movieRatings[i][1] = newRating;
      return;
    }
  }
  console.log("Movie doesn't exist in the list.");
}
const newRating = 9.5;
updateRating(movieTitle, newRating);
console.log(movieRatings);
//5
function removeRating(movieTitle) {
  for (i = 0; i < movieRatings.length; i++) {
    const movieName = movieRatings[i][0];
    const movieRating = movieRatings[i][1];
    if (movieName === movieTitle) {
      movieRatings.splice(i, 1);
      return;
    }
  }
  console.log("Movie doesn't exist in the list.");
}
removeRating(movieTitle);
console.log(movieRatings);

//6
function listMovies() {
  for (i = 0; i < movieRatings.length; i++) {
    console.log(movieRatings[i].join("-"));
  }
}

const movieRatings1 = [
  ["movie1", 1],
  ["movie2", 2],
  ["movie3", 3],
];
listMovies();

//7
function highestRatedMovie() {
  if (movieRatings.length) {
    let maxMovieRating = movieRatings[0][1];
    let maxMovieRatingTitle = movieRatings[0][0];
    for (let i = 1; i < movieRatings.length; i++) {
      if (movieRatings[i][1] > maxMovieRating) {
        maxMovieRating = movieRatings[i][1];
        maxMovieRatingTitle = movieRatings[i][0];
      }
    }
    return console.log(
      "The movie with the highest rating is:",
      maxMovieRatingTitle
    );
  }
  return console.log("There are no movies");
}
highestRatedMovie();

// Pure Functions
console.log("*********Pure Functions section***********");
// 1. Average Rating
// Example input: [3, 4, 5, 3, 5]
let sum = 0;
function calculateAverageRating(array) {
  let elements = array.length;
  for (let i = 0; i < elements; i++) {
    sum += array[i];
  }
  return sum / elements;
}
const array = [3, 4, 5, 3, 5];
console.log(calculateAverageRating(array));
// console.log(sum);

// 2. Filter Movies by Rating
// Example input: ([3, 4, 5, 2, 1, 5], 4)

function filterByRating(array, minRatingValue) {
  let filteredArray = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] >= minRatingValue) {
      filteredArray[j] = array[i];
      j++;
    }
  }

  console.log(filteredArray);
}
// const array = [3, 4, 5, 2, 1, 5];
// const minRatingValue = 4;
// filterByRating(array, minRatingValue);

// 3. Highest Rated Movie
// Example input: [3, 4, 5, 3, 5]
function findHighestRating(array) {
  let maxRating = array[0];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxRating) {
      maxRating = array[i];
    }
  }
  console.log(maxRating);
}
// const array = [3, 4, 5, 2, 1, 5];
// findHighestRating(array);
// 4. Ratings Above Threshold
// Example input: ([3, 4, 5, 2, 1, 5], 3)

function ratingAboveThreshold(array, threshold) {
  let filteredArray = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] > threshold) {
      filteredArray[j] = array[i];
      j++;
    }
  }

  console.log(filteredArray);
}
// const array = [3, 4, 5, 2, 1, 5];
// const threshold = 3;
// ratingAboveThreshold(array, threshold);
// 5. Count Movies in Rating Range
// Example input: ([3, 4, 5, 2, 1, 5], 4, 5)
function countInRatingRange(array, lowerBound, upperBound) {
  let j = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] >= lowerBound && array[i] <= upperBound) {
      j++;
    }
  }
  console.log(j);
}

// const array = [3, 4, 5, 2, 1, 5];
// const lowerBound = 4;
// const upperBound = 5;
// countInRatingRange(array, lowerBound, upperBound);
//the output is different from the expected.

// 6. Filter Unique Ratings
// Example input: [5, 3, 4, 3, 5, 4, 5]
function uniqueRating(array) {
  let noDuplicatesArray = [];
  let counter = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (counter[array[i]] != 1) {
      noDuplicatesArray[j] = array[i];
      j++;
      counter[array[i]] = 1;
    }
  }
  return noDuplicatesArray;
}
// const array = [5, 3, 4, 3, 5, 4, 5];
// uniqueRating(array);
// console.log(uniqueRating(array));
// 7. Merge Ratings
// Example input: ([5, 3, 4], [2, 3, 5])
function mergeRatings(array1, array2) {
  let filteredMergedArray = [];
  let mergedArray = array1.concat(array2);
  filteredMergedArray = uniqueRating(mergedArray);
  return filteredMergedArray;
}

// const array1 = [5, 3, 4];
// const array2 = [2, 3, 5];
// console.log(mergeRatings(array1, array2));

// 8. Ratings Differential
// Example input: ([4, 4, 4, 4, 5], [3, 3, 3, 3])
function ratingsDifferential(array1, array2) {
  const avg1 = calculateAverageRating(array1);
  const avg2 = calculateAverageRating(array2);
  return avg1 > avg2 ? avg1 - avg2 : avg2 - avg1;
}
const array1 = [4, 4, 4, 4, 5];
const array2 = [3, 3, 3, 3];
console.log(ratingsDifferential(array1, array2));
// 9. Filter Ratings by Multiple Criteria
// Example input: ([1, 2, 3, 4, 5], greaterThan=2, lessThan=5)
function filterRatingByCriteria(array, criteria1, criteria2) {
  const min = parseInt(criteria1);
  const max = parseInt(criteria2);
  let newArray = [];
  for (let i = 0, j = 0; i < array.length; i++) {
    if (array[i] >= min && array[i] <= max) {
      newArray[j] = array[i];
      j++;
    }
    console.log(min, max);
  }
  return newArray;
}
filterRatingByCriteria([1, 2, 3, 4, 5], "greater==2", "lessthan=5");
// console.log(
//   filterRatingByCriteria([1, 2, 3, 4, 5], "greater==2", "lessthan=5")
// );
parseInt("lessthan=5");

// Bonus Exercises

// 1. Sort Movie Ratings
// Example input: [5, 3, 4, 2, 1]

// 2. Average Rating of Top N Movies
// Example input: ([3, 1, 5, 4, 2], 3)

// 3. Create Rating Frequency Map
// Example input: [3, 4, 3, 5, 4, 5, 5]

// 4. Normalize Ratings
// Example input: ([1, 2, 3, 4, 5], 0, 10)
