const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;

// Check connection
db.once('open', () => {});

// Check for DB erros
db.on('error', (err) => {
  console.log(err);
});

// Init app
const app = express();

// Bring in Modles
let Article = require('./models/article');

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {

  Article.find({}, (err, articles) => {

    if (err) {
      console.log(err);
    } else {
      res.render('index', {
        title: 'Articles',
        articles: articles
      });
    }
  });
});

// Add Route
app.get('/articles/add', (req, res) => {
  res.render('add_article', {
    title: 'Add article'
  });
});

//Start Server
app.listen(3000, () => {
  console.log("Server started on the port 3000");
});