// 1. Calculate Average Rating
const movies1 = [
  { name: "Movie 1", ratings: [5, 6, 7] },
  { name: "Movie 2", ratings: [8, 9, 9] },
];
const movieName1 = "Movie 2";
function moviesAverage(movieName) {
  let sum = 0;
  const index = movies1.findIndex((movie) => movie.name === movieName);
  const ratingsNumber = movies1[index].ratings.length;
  for (let i = 0; i < ratingsNumber; i++) {
    sum += movies1[index].ratings[i];
  }
  console.log(
    `movieName: ${movieName}, and the average rating is ${sum / ratingsNumber}`
  );
  return index;
}


function CalculateAverage(){


}
test1 = moviesAverage(movieName1);
console.log(test1);

// 2. Find Highest Rated Movie
const movies2 = [
  { name: "Movie 1", ratings: [5, 6, 7] },
  { name: "Movie 2", ratings: [8, 9, 9] },
  { name: "Movie 3", ratings: [6, 8, 8] },
];

function maxRatingAverage {
let maxRatingIndex=0;
}

for (let i = 0; i < movies2.length; i++)
{
if (moviesAverage(movies1))
}

// 3. Find Most Rated Movie
const movies3 = [
  { name: "Movie 1", ratings: [5, 6, 7, 6] },
  { name: "Movie 2", ratings: [8, 9, 9] },
  { name: "Movie 3", ratings: [6, 8, 8] },
];

// 4. Remove Lowest Rating
const movies4 = [
  { name: "Movie 1", ratings: [5, 6, 7] },
  { name: "Movie 2", ratings: [8, 9, 9] },
];
const movieName4 = "Movie 1";

// 5. Movie Rating Histogram
const movies5 = [
  { name: "Movie 1", ratings: [5, 6, 7, 7] },
  { name: "Movie 2", ratings: [8, 9, 9] },
];
const movieName5 = "Movie 1";
