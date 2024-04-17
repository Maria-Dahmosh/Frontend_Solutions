// 1. Find the Longest Movie Title
const movieTitles1 = ["Inception", "The Dark Knight", "Interstellar"];
let longestTitle = movieTitles1[0].length;
let maxIndex = 0;
for (let i = 1; i < movieTitles1.length; i++) {
  if (movieTitles1[i].length > longestTitle) {
    longestTitle = movieTitles1[i].length;
    maxIndex = i;
  }
}
console.log(
  `The longest movie title is: ${movieTitles1[maxIndex]} in index ${maxIndex} and the length is ${longestTitle}.`
);

// 2. Calculate the Average Rating
const movieRatings2 = [8.3, 7.5, 9.0, 8.7];
let sum = 0;
let ratingAverage = 0;
for (let i = 1; i < movieRatings2.length; i++) {
  sum += movieRatings2[i];
}
ratingAverage = sum / movieRatings2.length;
console.log(`The average of the rating is: ${ratingAverage}.`);

// 3. Reverse the Movie List
const movieTitles3 = ["Inception", "The Dark Knight", "Interstellar"];
const newMovieTitles3 = [];
for (let i = 0; i < movieTitles3.length; i++) {
  newMovieTitles3[i] = movieTitles3[movieTitles3.length - i - 1];
}
console.log(newMovieTitles3);

// 4. Increase Movie Ratings
const movieRatings4 = [8.3, 7.5, 9.0, 8.7];
for (let i = 0; i < movieRatings4.length; i++) {
  movieRatings4[i] += 0.5;
}
console.log(movieRatings4);

// 5. Filter Movies by High Ratings
const movieRatings5 = [8.3, 7.5, 9.0, 8.7];
let j = 0;
const highMovieRatings5 = [];
for (let i = 0; i < movieRatings5.length; i++) {
  if (movieRatings5[i] > 8) {
    highMovieRatings5[j] = movieRatings5[i];
    j++;
  }
}
console.log(highMovieRatings5);

// 6. Count a Specific Rating's Occurrence
const movieRatings6 = [8.3, 8.7, 9.0, 8.7, 8.3];
const specificRating6 = 8.7;
let counter6 = 0;
for (let i = 0; i < movieRatings6.length; i++) {
  if (movieRatings6[i] === specificRating6) {
    counter6++;
  }
}
console.log(`8.7 rating appears: ${counter6} times.`);

// 7. Find Movies in Both Watched and Wish Lists
const watchedList7 = ["Inception", "The Dark Knight"];
const wishList7 = ["Interstellar", "Inception"];
const commonMovies = [];
let k = 0;
for (let i = 0; i < watchedList7.length; i++) {
  for (let j = 0; j < wishList7.length; j++) {
    if (wishList7[j] === watchedList7[i]) {
      commonMovies[k] = watchedList7[i];
      k++;
    }
  }
}
console.log(commonMovies);

// 8. Check Ratings Against a Threshold
const movieRatings8 = [8.3, 7.5, 9.0, 8.7];
const minRating8 = 8.0;
let j8 = 0;
for (let i = 0; i < movieRatings8.length; i++) {
  if (movieRatings8[i] > minRating8) {
    j8++;
  }
}
console.log(j8, movieRatings8.length);
if (j8 === movieRatings8.length) {
  console.log("All movie's rating are above the threshold");
} else {
  console.log("Not all movie's rating are above the threshold");
}

// 9. Identify the Maximum Rating
const movieRatings9 = [8.3, 7.5, 9.0, 8.7];
let maxRating = movieRatings9[0];
let maxRatingIndex = 0;
for (let i = 1; i < movieRatings9.length; i++) {
  if (movieRatings9[i] > maxRating) {
    maxRating = movieRatings9[i];
    maxRatingIndex = i;
  }
}
console.log(
  `The maximum rating belong to element in index ${maxRatingIndex}, and equal to ${maxRating}.`
);
// 10. Find the Highest Rating
const movieRatings10 = [8.3, 7.5, 9.0, 8.7];
//same as 9

// 11. Calculate Averages from a Rating List
const ratingsList11 = [
  [8, 7, 9],
  [6, 8, 7],
  [9, 9, 10],
];
let sum11 = 0;
for (let i = 0; i < ratingsList11.length; i++) {
  for (let j = 0; j < ratingsList11[i].length; j++) {
    sum11 += ratingsList11[i][j];
  }
  console.log(
    `The average of movie ${i} is: ${sum11 / ratingsList11[i].length}`
  );
  sum11 = 0;
}
// 12. Display Ratings as a Bar Chart
const movieRatings12 = [8, 5, 9];
for (let i = 0; i < movieRatings12.length; i++) {
  console.log("*".repeat(movieRatings12[i]));
}

// 13. Order Ratings in Ascending Sequence
const movieRatings13 = [8.3, 7.5, 9.0, 8.7];

let maxRating13 = movieRatings13[0];
let maxRatingIndex13 = 0;
const sortedArray13 = [];
const Index13 = movieRatings13.length;
for (let j = 0; j < Index13; j++) {
  for (let i = 1; i < movieRatings13.length; i++) {
    if (movieRatings13[i] > maxRating13) {
      maxRating13 = movieRatings13[i];
      maxRatingIndex13 = i;
    }
  }
  sortedArray13[j] = maxRating13;
  movieRatings13.splice(maxRatingIndex13, 1);
  maxRating13 = movieRatings13[0];
}
console.log(sortedArray13);

// 14. Calculate Total Ratings from Review Matrix
const reviewMatrix14 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];
let sum14 = 0;
for (let j = 0; j < reviewMatrix14.length; j++) {
  for (let i = 0; i < reviewMatrix14[j].length; i++) {
    sum14 += reviewMatrix14[j][i];
  }
}
console.log(`The total ratings is: ${sum14}`);

// 15. Find the Movie with Highest Rating in Each Category
const ratingMatrix15 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];
let maxRating15 = 0;
for (let i = 0; i < ratingMatrix15.length; i++) {
  maxRating15 = ratingMatrix15[i][0];
  for (let j = 1; j < ratingMatrix15[i].length; j++) {
    if (ratingMatrix15[i][j] > maxRating15) {
      maxRating15 = ratingMatrix15[i][j];
    }
  }
  console.log(`The highest rate for category ${i + 1} is ${maxRating15}.`);
}
// 16. Count Critically Acclaimed Movies in Each Genre
const genreAcclaimMatrix16 = [
  [5, 7],
  [8, 6],
  [9, 7],
];
let counter16 = 0;
for (let i = 0; i < genreAcclaimMatrix16.length; i++) {
  counter16 = 0;
  for (let j = 0; j < genreAcclaimMatrix16[i].length; j++) {
    if (genreAcclaimMatrix16[i][j] >= 7) {
      counter16++;
    }
  }
  console.log(
    `The number of movies with acclaim level >=7 in category ${
      i + 1
    } is ${counter16}.`
  );
}
// 17. Sum of Ratings for Blockbuster Movies by Genre
const blockbusterRatingMatrix17 = [
  [7, 8.5],
  [9.5, 9],
  [8, 7.5],
];

let sum17 = 0;
for (let i = 0; i < blockbusterRatingMatrix17.length; i++) {
  sum17 = 0;
  for (let j = 0; j < blockbusterRatingMatrix17[i].length; j++) {
    if (blockbusterRatingMatrix17[i][j] >= 8.5) {
      sum17 += blockbusterRatingMatrix17[i][j];
    }
  }
  console.log(
    `The sum of rating that are above 8,5 in category ${i + 1} is ${sum17}.`
  );
}
// 18. Average Rating of Movies by Director
const directorRatingMatrix18 = [
  [7, 8.5],
  [6, 9],
  [8, 7.5],
];

let sum18 = 0;
for (let i = 0; i < blockbusterRatingMatrix17.length; i++) {
  sum17 = 0;
  for (let j = 0; j < blockbusterRatingMatrix17[i].length; j++) {
    sum17 += blockbusterRatingMatrix17[i][j];
  }
  console.log(
    `The sum of rating that are above 8,5 in category ${i + 1} is ${
      sum17 / blockbusterRatingMatrix17[0].length
    }.`
  );
}
