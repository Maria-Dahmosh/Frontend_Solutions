//1
const movieTitle = "the dark knight";

function capitalizeTitle(movieTitle) {
  let movieTitleNew = "";

  for (let i = 0; i < movieTitle.length; i++) {
    if (i === 0 || movieTitle[i - 1] === " ") {
      movieTitleNew += movieTitle[i].toUpperCase();
    } else movieTitleNew += movieTitle[i];
  }
  return movieTitleNew;
}
console.log(capitalizeTitle(movieTitle));

//or
function capitalizeTitle1(movieTitle) {
  const movieTitleArray = movieTitle.split(" ");
  let movieTitleUpperCase = "";
  for (let i = 0; i < movieTitleArray.length; i++) {
    let word = movieTitleArray[i];
    movieTitleUpperCase += word[0].toUpperCase() + word.slice(1) + " ";
  }
  return movieTitleUpperCase;
}
console.log(capitalizeTitle1(movieTitle));

//2
const movieTitles = ["The Dark Knight", "Inception", "Interstellar"];
const query = "In";

function filterMovies(titles, query) {
  const movieTitlesFiltered = [];
  for (let i = 0, j = 0; i < movieTitles.length; i++) {
    if (movieTitles[i].includes(query)) {
      movieTitlesFiltered[j] = movieTitles[i];
      j++;
    }
  }
  return movieTitlesFiltered;
}
console.log(filterMovies(movieTitles, query));
//3
const directorName = "Nolan, Christopher";

function reformatDirectorName(name) {
  let fullname = "";
  fullname =
    name.slice(name.indexOf(",") + 2) + " " + name.slice(0, name.indexOf(","));
  return fullname;
}
console.log(reformatDirectorName(directorName));

//4
const movieLength = "2h 30min";

function extractMovieLength(lengthStr) {
  let hours, minutes, output;
  hours = parseInt(lengthStr.slice(0, lengthStr.indexOf(" ")));
  minutes = parseInt(lengthStr.slice(lengthStr.indexOf(" ")));
  output = hours + " hours and " + minutes + " minutes";
  return output;
}
console.log(extractMovieLength(movieLength));

//5
const titleForInitials = "The Dark Knight";

function getMovieInitials(title) {
  let titleNew = "";
  for (let i = 0; i < title.length; i++) {
    if (i === 0 || title[i - 1] === " ") {
      titleNew += title[i];
    }
  }
  return titleNew;
}
console.log(getMovieInitials(titleForInitials));

//6
const movieDetails = "Inception|Christopher Nolan|Sci-Fi";
function formatMovieDetails(details) {
  const detailsArray = details.split("|");
  return `${detailsArray[0]}, directed by ${detailsArray[1]}, genre: ${detailsArray[2]}`;
}

console.log(formatMovieDetails(movieDetails));

//7
const titleForSlug = "The Dark Knight";
function createMovieSlug(title) {
  let newTitle = "";
  for (let i = 0; i < title.length; i++) {
    if (title[i] != " ") {
      newTitle += title[i].toLowerCase();
    } else newTitle += "-";
  }
  return newTitle;
}
console.log(createMovieSlug(titleForSlug));

//8
const synopsis =
  "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. But his tragic past may doom the project and his team to disaster.";
const maxSynopsisLength = 100;
function trimSynopsis(synopsis, maxLength) {
  if (synopsis.length > maxLength) {
    for (let i = maxSynopsisLength; i < synopsis.length; i++) {
      if (synopsis[i - 1] === " ") {
        return synopsis.substring(0, i - 1);
      }
    }
  } else return synopsis;
}
console.log(trimSynopsis(synopsis, maxSynopsisLength));
console.log(trimSynopsis(synopsis, maxSynopsisLength).length);

//9
const genres = "Action,Adventure,Sci-Fi";
function splitGenres(genreStr) {
  let splitGenresArray = [];
  splitGenresArray = genreStr.split(",");
  return splitGenresArray;
}
console.log(splitGenres(genres));
