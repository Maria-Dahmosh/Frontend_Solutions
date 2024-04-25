// // // 1. Calculate Average Rating
// // const movies1 = [
// //   { name: "Movie 1", ratings: [5, 6, 7] },
// //   { name: "Movie 2", ratings: [8, 9, 9] },
// // ];
// // const movieName1 = "Movie 2";
// // function moviesAverage(moviesArray, movieName) {
// //   let sum = 0;
// //   const index = moviesArray.findIndex((movie) => movie.name === movieName);
// //   const ratingsNumber = moviesArray[index].ratings.length;
// //   for (let i = 0; i < ratingsNumber; i++) {
// //     sum += moviesArray[index].ratings[i];
// //   }
// //   // console.log(
// //   //   `movieName: ${movieName}, and the average rating is ${sum / ratingsNumber}`
// //   // );
// //   return sum / ratingsNumber;
// // }
// // test1 = moviesAverage(movies1, movieName1);
// // console.log(test1);

// // // 2. Find Highest Rated Movie
// // const movies2 = [
// //   { name: "Movie 1", ratings: [5, 6, 7] },
// //   { name: "Movie 2", ratings: [8, 9, 9] },
// //   { name: "Movie 3", ratings: [6, 8, 8] },
// // ];

// // function maxRatingAverage(movies) {
// //   let maxRatingIndex = 0;
// //   let maxAvg = moviesAverage(movies, movies[0].name);

// //   for (let i = 1; i < movies.length; i++) {
// //     const avg = moviesAverage(movies, movies[i].name);

// //     if (avg > maxAvg) {
// //       maxAvg = avg;
// //       maxRatingIndex = i;
// //     }
// //   }
// //   console.log(movies[maxRatingIndex]);
// // }

// // maxRatingAverage(movies2);

// // // 3. Find Most Rated Movie
// // const movies3 = [
// //   { name: "Movie 1", ratings: [5, 6, 7, 6] },
// //   { name: "Movie 2", ratings: [8, 9, 9] },
// //   { name: "Movie 3", ratings: [6, 8, 8] },
// // ];
// // function mostRatedMovie(movies) {
// //   let maxLength = movies[0].ratings.length;
// //   let maxLengthIndex = 0;
// //   for (let i = 1; i < movies.length; i++) {
// //     if (movies[i].ratings.length > maxLength) {
// //       maxAvg = avg;
// //       maxLengthIndex = i;
// //     }
// //   }
// //   console.log(movies[maxLengthIndex]);
// // }
// // mostRatedMovie(movies3);

// // 4. Remove Lowest Rating
// const moviesEx4 = [
//   { name: "Movie 1", ratings: [5, 6, 7] },
//   { name: "Movie 2", ratings: [8, 9, 9] },
// ];
// const movieName4 = "Movie 1";

// function mostRatedMovie(movies4, movieName) {
//   const index4 = movies4.findIndex((movie) => movie.name === movieName);
//   let minRatingIndex = 0;
//   let minRating = movies4[index4].ratings[0];
//   const ratingsNumber = movies4[index4].ratings.length;
//   for (let i = 0; i < ratingsNumber; i++) {
//     if (movies4[index4].ratings[i] < minRating) {
//       minRating = movies4[index4].ratings[i];
//       minRatingIndex = i;
//     }
//   }
//   movies4[index4].ratings.splice(minRatingIndex, 1);
//   console.log(movies4[index4]);
// }
// mostRatedMovie(moviesEx4, movieName4);

// 5. Movie Rating Histogram
const movies5 = [
  { name: "Movie 1", ratings: [5, 6, 7, 7] },
  { name: "Movie 2", ratings: [8, 9, 9] },
];
const movieName5 = "Movie 1";
function ratingHistogram(movies, movieName) {
  const movieIndex = movies.findIndex((movie) => movie.name === movieName);
  const histogram = {};

  for (let i = 0; i < movies[movieIndex].ratings.length; i++) {
    const rating = movies[movieIndex].ratings[i];
    if (histogram[rating]) {
      histogram[rating]++;
    } else {
      histogram[rating] = 1;
    }
  }

  return histogram;
}

console.log(ratingHistogram(movies5, movieName5));
