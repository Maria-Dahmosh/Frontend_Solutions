const movies = [
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    votes: 2337890,
    genre: ["Drama"],
    year: 1994,
  },
  {
    title: "The Godfather",
    rating: 9.2,
    votes: 1603867,
    genre: ["Crime", "Drama"],
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    rating: 9.0,
    votes: 1123155,
    genre: ["Crime", "Drama"],
    year: 1974,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    votes: 2273490,
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
  },
  {
    title: "12 Angry Men",
    rating: 9.0,
    votes: 686888,
    genre: ["Crime", "Drama"],
    year: 1957,
  },
];

//1

function movieTitles(moviesArray) {
  const movieTitles = moviesArray.map((movie) => movie.title);
  return movieTitles;
}
//console.log(movieTitles(movies));

//2
function highlyRatedMovies(moviesArray, minRating) {
  const filteredMoviesArray = moviesArray.filter(
    (movie) => movie.rating >= minRating
  );
  return filteredMoviesArray;
}
//console.log(highlyRatedMovies(movies, 9.1));

//3
function totalVotesCount(moviesArray) {
  const votesCount = moviesArray.reduce(
    (sum, currentValue) => sum + currentValue.votes,
    0
  );
  return votesCount;
}
//console.log(totalVotesCount(movies));

//4
function combineMovies(moviesArray) {
  const movieTitleRating = moviesArray.map(
    (movie) => `${movie.title} - ${movie.rating}`
  );
  return movieTitleRating;
}
//console.log(combineMovies(movies));

//5
function updateRating(moviesArray, newRating, movieTitle) {
  const movieIndex = moviesArray.findIndex(
    (movie) => movie.title === movieTitle
  );
  moviesArray[movieIndex].rating = newRating;
  return moviesArray;
}
//console.log(updateRating(movies, 9.5, "The Shawshank Redemption"));

//6
function genreFilter(moviesArray, genreString) {
  const genreArray = moviesArray.filter((movie) =>
    movie.genre.includes(genreString)
  );
  return genreArray;
}
//console.log(genreFilter(movies, "Drama"));

//7
function yearlyMovieFilter(moviesArray, movieYear) {
  const latestMovies = moviesArray.filter((movie) => movie.year > movieYear);
  return latestMovies;
}
//console.log(yearlyMovieFilter(movies, 2000));

//8
function averageMovieRating(moviesArray) {
  const ratingAvg = moviesArray.reduce(
    (ratingSum, currentValue) => ratingSum + currentValue.rating,
    0
  );
  return ratingAvg / moviesArray.length;
}
//console.log(averageMovieRating(movies));

//9
function votesSort(moviesArray) {
  const sortedArray = moviesArray.sort((a, b) => a.vote - b.vote);
  return sortedArray;
}
console.log(votesSort(movies));
