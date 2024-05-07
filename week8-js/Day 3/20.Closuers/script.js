// function createMovie(mvTitle) {
//   let ratings = [];

//   return {
//     title: mvTitle,
//     addRating: function (rating) {
//       if (ratings.length >= 10) {
//         console.log("Maximum number of ratings reached!");
//         return;
//       }
//       ratings.push(rating);
//     },
//     getAverageRating: function () {
//       if (ratings.length === 0) {
//         return 0;
//       }
//       const sum = ratings.reduce((acc, cur) => acc + cur, 0);
//       return sum / ratings.length;
//     },
//   };
// }

//2
function createMovieWithDetails(mvTitle, mvDirector, mvYear) {
  let ratings = [];

  return {
    getDetail: function () {
      return { title: mvTitle, director: mvDirector, releaseYear: mvYear };
    },
    addRating: function (rating) {
      if (ratings.length >= 10) {
        console.log("Maximum number of ratings reached!");
        return;
      }
      ratings.push(rating);
    },
    getAverageRating: function () {
      if (ratings.length === 0) {
        return 0;
      }
      const sum = ratings.reduce((acc, cur) => acc + cur, 0);
      return sum / ratings.length;
    },
  };
}

//3
function createMovieDatabase() {
  const movies = {};

  return {
    addMovie: function (title) {
      if (movies[title]) {
        console.log("Movie already exists in the database!");
        return;
      }
      movies[title] = createMovie(title);
    },
    findMovieByTitle: function (title) {
      if (!movies[title]) {
        console.log("Movie not found in the database!");
        return null;
      }
      return movies[title];
    },
    getAverageRatingOfAllMovies: function () {
      const movieCount = Object.keys(movies).length;
      if (movieCount === 0) {
        return 0;
      }
      let totalAverageRating = 0;
      for (const title in movies) {
        totalAverageRating += movies[title].getAverageRating();
      }
      return totalAverageRating / movieCount;
    },
  };
}
