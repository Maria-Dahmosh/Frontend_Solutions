class movie {
  #title;
  #releaseYear;
  #genre;
  #ratings;
  constructor(title, releaseYear, genre) {
    //validation
    if (title.length > 100 || title.length === 0) {
      console.error("Error: the title length is not valid!");
    }

    if (releaseYear < 1900 || releaseYear > new Date().getFullYear()) {
      console.error("Error: the releaseYear is not valid!");
    }
    if (genre.length === 0) {
      console.error("Error: the genre is not valid!");
    }
    this.#title = title;
    this.#releaseYear = releaseYear;
    this.#genre = genre;
    this.#ratings = [];
  }

  //getters
  getTitle() {
    return this.#title;
  }
  getReleaseYear() {
    return this.#releaseYear;
  }
  getGenre() {
    return this.#genre;
  }
  //setters
  set title(value) {
    this.#title = value;
  }
  set releaseYear(value) {
    this.#releaseYear = value;
  }
  set genre(value) {
    this.#genre = value;
  }
  //methods
  addRating(num) {
    if (num >= 1 && num <= 5) {
      this.#ratings.push(num);
    } else {
      console.error("Error: the rating is out of the range!");
    }
  }
  getAverageRating() {
    if (this.#ratings.length === 0) {
      return "No ratings.";
    }
    const sum = this.#ratings.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return sum / this.#ratings.length;
  }

  displayDetails() {
    console.log(
      `Movie's name is: ${this.#title}, which is released in ${
        this.#releaseYear
      }, and the genre is ${this.#genre}`
    );
  }

  typeOfMovie() {
    return "This is a standard movie";
  }
}
// const movie1 = new movie("movie1", 2020, "drama");
// console.log(movie1.getGenre());
// movie1.addRating(6);
// movie1.addRating(4);
// movie1.displayDetails();
// console.log(movie1.typeOfMovie());

//2
class inheritedMovie extends movie {
  #numberOfEpisodes;

  constructor(title, releaseYear, genre, numberOfEpisodes) {
    super(title, releaseYear, genre);
    this.#numberOfEpisodes = numberOfEpisodes;
  }

  get numberOfEpisodes() {
    return this.#numberOfEpisodes;
  }

  set numberOfEpisodes(value) {
    if (typeof value == "number" && value > 0) {
      this.#numberOfEpisodes = value;
    } else {
      console.error("Error: the number of episodes is not valid!");
    }
  }
  displayDetails() {
    console.log(
      `Movie's name is: ${this.getTitle()}, which is released in ${
        this.getReleaseYear
      },the genre is ${this.getGenre}, and the number of episodes is ${
        this.#numberOfEpisodes
      }`
    );
  }
}

//documentary
class documentary extends movie {
  #topic;

  constructor(title, releaseYear, genre, topic) {
    super(title, releaseYear, genre);
    this.#topic = topic;
  }

  get topic() {
    return this.#topic;
  }

  set topic(value) {
    if (value.length > 1 && value.length < 50) {
      this.#topic = value;
    } else {
      console.error("Error: topic's value is not valid!");
    }
  }

  displayDetails() {
    console.log(
      `Movie's name is: ${this.getTitle()}, which is released in ${this.getReleaseYear()},the genre is ${this.getGenre()}, and the topic is ${this.typeOfMovie()}`
    );
  }
}

const documentary1 = new documentary(
  "documentary1 test",
  2020,
  "Documentary",
  "aaaa a"
);

documentary1.displayDetails();

documentary1.topic = "History and Evolution";
