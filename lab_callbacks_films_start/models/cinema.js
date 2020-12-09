const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function () {
  const filmTitles = this.films.map(film => film.title);
  return filmTitles;
};


Cinema.prototype.findTitle = function (title) {
  const findTitle = this.films.find( film => film.title === title);
  return findTitle;

};


Cinema.prototype.filmsByProperty = function (property, value) {

  const filterByProperty = this.films.filter( film => film[property] === value);
  // console.log(filterByProperty);
  return filterByProperty;

};


Cinema.prototype.checkIfMadeInYear = function (year) {

  const checkYear = this.films.some(film => film.year === year);
  return checkYear;

};


Cinema.prototype.checkIfAll = function (length) {

    const checkIfAll = this.films.every( film => film.length > length);
    return checkIfAll;

};

Cinema.prototype.totalRunningTime = function (){

  const totalRunningTime = this.films.reduce((acc, value) => {
    return acc + value.length


  },0);
  return totalRunningTime;

};


module.exports = Cinema;
