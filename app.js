const express = require('express')

const scraper = require('./utils/scraper')

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/reviews', (req, res) => {
    scraper.extractReviews(req.query.url)
    .then(data => {
        res.status(200).json({ message: "success", data: data })
    }).catch(err => res.status(500).json({ message: err }))
});

app.get('/', (req, res) => {
  res.status(200).render('home');
});

app.listen(process.env.PORT || 5000, () =>
  console.log('Listening on port!'),
);