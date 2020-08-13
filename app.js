const express = require('express');

const path = require('path');

// Init app
const app = express();

//Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Home Route
app.get('/', (req, res) => {
  let articles = [
    {
      id: 1,
      title: 'article 1',
    },
    {
      id: 2,
      title: 'article 2',
    },
    {
      id: 3,
      title: 'article 3',
    }
  ]
  res.render('index', {
    title: 'Articles',
    articles: articles
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
