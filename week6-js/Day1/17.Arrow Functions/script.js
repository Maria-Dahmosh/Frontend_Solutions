// 1. Simple Arrow Function Conversion
function getMovies(movies) {
  return movies.map((movie) => movie.title);
}
const getMovies = (movies) => {
  movies.map((movie) => movie.title);
};
// 2. Control Flow in Arrow Functions
function averageMovieRating(rating) {
  if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Average";
  } else {
    return "Bad";
  }
}
const averageMovieRating = (rating) => {
  if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Average";
  } else {
    return "Bad";
  }
};

// 3. Arrow Functions with Multiple Operations
function getTotalMovieLength(movies) {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return "Total movie length is " + totalLength + " minutes";
}

const getTotalMovieLength = (movies) => {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return "Total movie length is " + totalLength + " minutes";
};

// 4. Arrow Functions as Callbacks
const sortedMovies = movies.sort(function (a, b) {
  return b.averageRating - a.averageRating;
});

const sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);

// 5. Implicit Return with Arrow Functions
// function getMovieTitles(movies) {
//   return movies.map(function (movie) {
//     return movie.title;
//   });
// };

const getMovieTitles = (movies) => movies.map((movie) => movie.title);
