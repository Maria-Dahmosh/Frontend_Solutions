//1
const movieLibrary = ["Inception", "The matrix", "Interstellar"];
const movieToCheck = "Inception";
console.log(
  `Do movieToCheck exists in the array? ${movieLibrary.includes(movieToCheck)}`
);

//2 reverse change the order of the original array
const releaseDates = ["1999", "2010", "2014"];
console.log("releaseDates array: ", releaseDates);
const reverseReleaseDates = releaseDates.reverse();
console.log("reverseReleaseDates array: ", reverseReleaseDates);

//3
const movieGenres = ["Sci-Fi", "Action", "Adventure"];
console.log(`${movieGenres.join()}`);
//4
const genreToCheck = "Action";
console.log(
  `Do genreToCheck exists in the array? ${movieGenres.includes(genreToCheck)}`
);

//5
const movieTitles = ["Inception", "The matrix", "Interstellar"];
const specificMovie = "Interstellar";
if (movieTitles.indexOf(specificMovie) != -1) {
  console.log(
    `specificMovie exists in the array and its index is ${movieTitles.indexOf(
      specificMovie
    )}`
  );
} else {
  console.log("specificMovie doesn't exist in the array.");
}

//6
const upComingReleases = ["Avatar", "Dune", "Tenet"];
console.log("The array before removing the last element:", upComingReleases);
upComingReleases.pop();
console.log("The array after removing the last element:", upComingReleases);

//7
const classicMovies = ["The Godfather", "Citizen Cane"];
console.log("The array before adding element to the beginning:", classicMovies);
const newMovie = "Casablanca";
classicMovies.unshift(newMovie);
console.log("The array after adding element to the beginning:", classicMovies);

//8
const filmNoir = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
console.log(
  "The array before removing the first element from the beginning:",
  filmNoir
);
filmNoir.shift();
console.log(
  "The array after removing the first element from the beginning:",
  filmNoir
);
//9
const actionMovies = ["Die Hard", "John Wick"];
const comedyMovies = ["Superbad", "The Hangover"];
allMovies = actionMovies.concat(comedyMovies);
console.log("The new array that contains all movies:", allMovies);

//10
const movieTitles10 = ["Inception", "The Matrix", "Interstellar"];
console.log("The array before sorting:", movieTitles);
console.log("The array after sorting:", movieTitles.sort());

//11
const quotesString =
  "I'll be back,May the Force be with you,To infinity and beyond";
const quotesArray = quotesString.split(",");
console.log(quotesArray);

//12
const topMovies = [
  "The Shawshank Redemption",
  "The Godfather",
  "The Dark Knight",
];
const n = 2;
topMoviesNew = topMovies.slice(0, n);
console.log(topMoviesNew);

//13
const movieWishlist = ["The Matrix 4", "Avatar 2", "Dune"];
console.log("The array before: ", movieWishlist);
movieWishlist.splice(0, 3);
console.log("The array after: ", movieWishlist);

//14
const movies = ["Inception", "Interstellar"];
const newMovie14 = "Tenet";
console.log("The array before: ", movies);
movies.push(newMovie14);
console.log("The array after: ", movies);

//15
const movies15 = ["Inception", "Interstellar", "Tenet"];
console.log("The array before: ", movies15);
console.log(`The removed item: ${movies.shift()}`);
console.log("The array after: ", movies);

//16
const movies16 = ["Inception", "Interstellar", "Tenet"];
console.log(movies16.join());

//17
const movies17 = ["Inception", "Interstellar", "Tenet"];
const movieToFind = "Interstellar";
if (movies17.indexOf(specificMovie) != -1) {
  console.log(
    `movieToFind exists in the array and its index is ${movies17.indexOf(
      movieToFind
    )}`
  );
} else {
  console.log("movieToFind doesn't exist in the array.");
}

//18
const movies18 = ["Inception", "Interstellar", "Tenet"];
console.log("movies18 array: ", movies18);
movies18.reverse();
console.log("movies18 array: ", movies18);

//19
const releaseYears19 = [2001, 2023, 1998, 2014];
console.log("The array before sorting:", releaseYears19);
console.log("The array after sorting:", releaseYears19.sort());
