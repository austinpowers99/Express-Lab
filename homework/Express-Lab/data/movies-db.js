const movies = [
    {movie: 'Interestelar', good: true},
    {movie: 'Arrival', good: true},
    {movie: 'Gravity', good: false}
  ];

  module.exports = {
    getAll: function() {
        return movies;
    }
  }