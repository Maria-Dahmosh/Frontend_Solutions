//1
const movie = {
  title: "The Notebook",
  director: "Nick Cassavetes",
  releaseYear: 2004,
  genres: ["Romance", "Comedy", "Drama"],
  ratings: [8, 9, 8, 7],
  getAverageRating: function () {
    const sum = this.ratings.reduce((total, rating) => total + rating, 0);
    return sum / this.ratings.length;
  },
};
console.log(movie.getAverageRating());

//2
movie.cast = [
  { name: "Ryan Gosling", role: "Noah" },
  { name: "Rachel McAdams", role: "Allie" },
  { name: "James Garner", role: "Duke" },
];
//console.log(movie);
//log the second genre
console.log(movie.genres[1]); //using dot notation
console.log(movie["genres"][1]); //using bracket notation
//log the name of the second actor in cast
console.log(movie.cast[1].name); //using dot notation
console.log(movie.cast[1]["name"]); //using bracket notation

//3
movie.releaseYear = 2005; // or movie['releaseYear'] = 2005;
movie.ratings.push(9.1);

delete movie.director;

movie.cast[0].role = "role was updated";
movie["cast"][0]["role"] = "role was updated twice";
console.log(movie);

console.log(movie.hasOwnProperty("ratings"));
//4
const movies = [
  { title: "Inception", details: { duration: 148, rating: "PG-13" } },
  { title: "Interstellar", details: { duration: 169, rating: "PG-13" } },
];
console.log(movies[0].details.duration);
// console.log(movies[0]["details"]["duration"]);

function durationAverage(moviesArray) {
  let sum = 0;
  for (const element of moviesArray) {
    sum += element.details.duration;
  }
  return sum / moviesArray.length;
}
console.log(durationAverage(movies));

//5
const movieObject1 = { title: "Inception", duration: 148 };
const movieObject2 = { rating: "PG-13" };
const movies12merged = Object.assign(movieObject1, movieObject2);
console.log(movies12merged);
Object.freeze(movies12merged);

//to prevent changes to a movie object
const movies12mergedNew = Object.assign({}, movieObject1, movieObject2);
console.log(movies12mergedNew);
//prevents new properties from being added to a movie object, but values of existing properties can still be changed
Object.seal(movies12mergedNew);

console.log(Object.isSealed(movies12mergedNew));
console.log(Object.isFrozen(movies12merged));

//6
const movieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  ratings: [8, 9, 9.5, 8.5],
};
function logNameValue(obj) {
  const propertyNames = Object.keys(obj); //array of the properties
  for (const name of propertyNames) {
    console.log(`${name}: ${obj[name]}`);
  }
}
logNameValue(movieDetails);
// 7
console.log("exe 7");
const movieCollection = {
  Inception: 9,
  Interstellar: 8.5,
  "The Dark Knight": 9.5,
  Prestige: 8,
};
function ratingIncrease(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (value < 7) {
      obj[key] += 1;
    }
  }
  return obj;
}
console.log(ratingIncrease(movieCollection));

// 8
console.log("exe 8");

const movies2 = {
  1: { title: "Inception", year: 2010, rating: 9 },
  2: { title: "The Matrix", year: 1999, rating: 8.5 },
  3: { title: "Interstellar", year: 2014, rating: 8.6 },
};
function logMoviesAfter2000(obj) {
  const moviesAfter2000 = [];

  for (const [property, value] of Object.entries(obj)) {
    if (value.year > 2000) {
      moviesAfter2000.push(Object.assign({}, value, { isNewer: true }));
    }
  }
  return moviesAfter2000;
}
console.log(logMoviesAfter2000(movies2));
// 9
console.log("exe 9");

const genreRatings = {
  action: [8, 9, 7, 10, 8.5],
  sciFi: [8.5, 8, 9, 9.5, 7.5],
  drama: [7, 7.5, 8, 8.5, 9],
};
function ratingAveragePerGenre(obj) {
  for (const value of Object.keys(obj)) {
    let sum = 0;
    length = obj[value].length;
    for (const subValue of obj[value]) {
      sum += subValue;
    }
    console.log(`${value}: ${sum / length}`);
  }
}

ratingAveragePerGenre(genreRatings);

// 10
console.log("exe 10");

const movieAwards = {
  Inception: "Best Visual Effects",
  Interstellar: "Best Visual Effects",
  "The Dark Knight": "Best Supporting Actor",
  Prestige: "Best Cinematography",
};

function awards(obj) {
  const newAwards = {};
  for (const [movieName, award] of Object.entries(obj)) {
    if (newAwards[award]) {
      newAwards[award].push(movieName);
    } else {
      newAwards[award] = [movieName];
    }
  }
  return newAwards;
}

console.log(awards(movieAwards));
