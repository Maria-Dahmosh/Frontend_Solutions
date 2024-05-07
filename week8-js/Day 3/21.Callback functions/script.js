//ex1

function processMovies(movies, callback) {
  if (!Array.isArray(movies)) {
    throw new Error("Expected an array of movies");
  } else {
    for (const movie of movies) {
      if (!movie.hasOwnProperty("title") || !movie.hasOwnProperty("rating")) {
        throw new Error(
          `Movie with ID ${movie.id} is not correctly structured`
        );
      }
    }
    const newMovies = JSON.parse(JSON.stringify(movies));

    for (const movie of newMovies) {
      callback(movie);
    }

    return newMovies;
  }
}

//2
function processReviews(reviews, callback) {
  if (!Array.isArray(reviews)) {
    throw new Error("Expected an array of reviews");
  } else {
    for (const review of reviews) {
      if (
        !review.hasOwnProperty("movieId") ||
        !review.hasOwnProperty("rating") ||
        !review.hasOwnProperty("comment")
      ) {
        throw new Error(
          `review with ID ${review.id} is not correctly structured`
        );
      }
    }
    const newReviews = JSON.parse(JSON.stringify(reviews));

    for (const review of newReviews) {
      callback(review);
    }

    return newReviews;
  }
}

//3

function processUsers(users, callback) {
  if (!Array.isArray(users)) {
    throw new Error("Expected an array of users");
  } else {
    for (const user of users) {
      if (
        !user.hasOwnProperty("name") ||
        !user.hasOwnProperty("age") ||
        !user.hasOwnProperty("favoriteMovies") ||
        !user.hasOwnProperty("reviewsPosted")
      ) {
        throw new Error(`user with ID ${user.id} is not correctly structured`);
      }
    }
    const newUsers = JSON.parse(JSON.stringify(users));

    for (const user of newUsers) {
      callback(user);
    }

    return newUsers;
  }
}

processUsers((user) => {
  user.reviewsPosted += 1;
  return user;
});

const users1 = [
  {
    id: "a",
    name: "Username1",
    age: 30,
    favoriteMovies: ["Movie Title 1", "Movie Title 2"],
    reviewsPosted: 1,
  },
  {
    id: "b",
    name: "Username2",
    age: 30,
    favoriteMovies: ["Movie Title 1", "Movie Title 2"],
    reviewsPosted: 2,
  },
  {
    id: "c",
    name: "Username3",
    age: 30,
    favoriteMovies: ["Movie Title 1", "Movie Title 2"],
    reviewsPosted: 3,
  },
];
console.log(processUsers(users1, processUsers));
