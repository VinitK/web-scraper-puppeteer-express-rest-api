const express = require('express')

const scraper = require('./utils/scraper')

const app = express();

app.get('/reviews', (req, res) => {
    scraper.extractReviews(req.query.url)
    .then(data => {
        res.status(200).json({ message: "success", data: data })
    }).catch(err => res.status(500).json({ message: "Something went wrong. Could not fetch result." }))
});

app.listen(process.env.PORT || 3000, () =>
  console.log('Example app listening on port!'),
);