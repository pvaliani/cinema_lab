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



module.exports = Cinema;
