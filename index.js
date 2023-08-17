class Media {
  constructor(title, isCheckedOut, ratings) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get ratings() {
    return this._ratings;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(value) {
    this._isCheckedOut = value;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let ratingsSum = this.ratings.reduce(
      (accumulator, rating) => accumulator + rating
    );
    return ratingsSum / this.ratings.length;
  }

  addRating(value) {
    this.ratings.push(value);
  }
}

class Book extends Media {
  constructor(author, title, pages, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._author = author;
    this._pages = pages;
  }
  set author(newAuthor) {
    this._author = newAuthor;
  }
  set pages(newPages) {
    this._pages = newPages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime, isCheckedOut, ratings) {
    super(title, isCheckedOut, ratings);
    this._director = director;
    this._runTime = runTime;
  }
  set director(newDirector) {
    this._director = newDirector;
  }
  set pages(newRunTime) {
    this._runTime = newRunTime;
  }
  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);
console.log(historyOfEverything.getAverageRating);
const speed = new Movie("Jan de Bont", "Speed", 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating);
