//ex1

class media {
  #title;
  #duration;
  #ratings;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
    this.#ratings = [];
  }
  getTitle() {
    return this.#title;
  }
  getDuration() {
    return this.#duration;
  }
  addRating = (rating) => this.#ratings.push(rating);
  #ratingAvg() {
    if (this.#ratings.length === 0) return "No ratings yet";
    else {
      return (
        this.#ratings.reduce((sum, currentRating) => sum + currentRating, 0) /
        this.#ratings.length
      );
    }
  }

  getAvg() {
    return this.#ratingAvg();
  }
  //   getRatings() {
  //     return this.#ratings;
  //   }
  displayDetails() {
    const averageRating = this.#ratingAvg();
    return `Title: ${this.getTitle()}, Duration: ${this.getDuration()}, Average Rating: ${averageRating}`;
  }
}

const media1 = new media("The Notebook", 120);
media1.addRating(8);
media1.addRating(6);

// console.log(media1.getTitle()); // Output: "The Notebook"
// console.log(media1.getDuration()); // Output: 120
// //console.log(media1.getRatings());
// console.log(media1.displayDetails());

//2
class Movie extends media {
  #director;
  #genre;
  constructor(title, duration, director, genre) {
    super(title, duration);
    this.#director = director;
    this.#genre = genre;
  }
  getDirector() {
    return this.#director;
  }
  getGenre() {
    return this.#genre;
  }
  displayDetails() {
    const averageRating = this.getAvg();
    return `Title: ${this.getTitle()}, Duration: ${this.getDuration()}, Average Rating: ${averageRating}, Director: ${this.getDirector()}, Genre: ${this.getGenre()},`;
  }
}

//2.4
class Series extends media {
  #seasons;

  constructor(title, duration, seasons) {
    super(title, duration); // Call the superclass constructor with title and duration
    this.#seasons = seasons;
  }

  getSeasons() {
    return this.#seasons;
  }
  displayDetails() {
    const averageRating = this.getAvg();
    return `Title: ${this.getTitle()}, Duration: ${this.getDuration()}, Average Rating: ${averageRating}, Season: ${this.getSeasons()}, `;
  }
}

const movie1 = new Movie("Movie 1", 120, "Director 1", "Action");
movie1.addRating(6);
movie1.addRating(8);
console.log(movie1.displayDetails());

const series1 = new Series("Series 1", 30, 5);
series1.addRating(2);
series1.addRating(8);
console.log(series1.displayDetails());

//3
class User {
  #username;
  #WatchedMedia;
  constructor(username) {
    this.#username = username;
    this.#WatchedMedia = [];
  }
  getUsername() {
    return this.#username;
  }
  addMedia = (mediaObj) => this.#WatchedMedia.push(mediaObj);

  rateMedia = (mediaObj, ratingValue) => {
    if (this.#WatchedMedia.includes(mediaObj)) {
      mediaObj.addRating(ratingValue);
    } else return "The user can only rate watched media";
  };

  displayWatchedMediaDetails() {
    return this.#WatchedMedia.map((media) => media.displayDetails()).join("\n");
  }
}
const user1 = new User("Alice");

// Assuming `movie1` and `series1` are previously defined media objects
user1.addMedia(movie1);
user1.addMedia(series1);

user1.rateMedia(movie1, 4);
user1.rateMedia(series1, 5);

console.log(user1.displayWatchedMediaDetails());
