const express = require('express')

const scraper = require('./utils/scraper')

const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.get('/reviews', (req, res) => {
    scraper.extractReviews(req.query.url)
    .then(data => {
      if(data.reviewCount > 0) {
        data.message = "success";
      } else if (data.reviewCount == 0) {
        data.message = "No data";
      } else {
        data.message = "failed";
      }
      res.status(200).render('reviews', data);
    }).catch(err => {
      res.status(500).render('reviews', { message:'reviews', url: req.query.url });
    });
});

app.get('/api/reviews', (req, res) => {
  scraper.extractReviews(req.query.url)
  .then(data => {
    data.message = data ? "success" : "fail";
    res.status(200).json(data);
  }).catch(err => res.status(500).json({ message: err }))
});

app.get('/', (req, res) => {
  res.status(200).render('home');
});

app.listen(process.env.PORT || 5000, () =>
  console.log('Listening on port!'),
);