const express =  require ('express');
const path = require('path');
const app = express();

// require the Movie "database"
const moviesDb = require('./data/movies-db');

// Configure app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Mount middleware 


// Mount routes



// Define a "root" route directly on app
app.get('/', function(req, res) {
    res.redirect('/movies');
});

app.get('/home', function(req, res) {
    res.render('home');
});

app.get('/movies', function(req, res) {
    res.render('movies/index', { 
        movies: moviesDb.getAll()
    });
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening');
});