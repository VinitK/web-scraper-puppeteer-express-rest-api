const puppeteer = require('puppeteer'); // import puppeteer

extractReviews = async (url) => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox',],});
    const page = await browser.newPage();
    
    await page.goto(url, {waitUntil: 'networkidle2'});
    const reviewCount = await page.evaluate(() => document.querySelector('span[itemprop="reviewCount"]').getAttribute('content'));
    let reviewArray = [];
    if (reviewCount > 0) {
        url = url+"&pagenumber=0&RSort=1&csid=ITD&recordsPerPage="+reviewCount+"&body=REVIEWS#CustomerReviewsBlock"
        await page.goto(url, { waitUntil: 'load' });
        reviewArray = await page.evaluate(() => Array.from(document.querySelectorAll('.review')).map(review => ({ reviewTitle: review.querySelector('.rightCol blockquote h6').textContent, reviewComment: review.querySelector('.rightCol blockquote p').textContent, reviewRating: +review.querySelector('.leftCol .itemReview dd .itemRating strong').textContent, reviewDate: review.querySelector('.leftCol .reviewer dd:nth-of-type(2)').textContent, reviewer: review.querySelector('.leftCol .reviewer dd:nth-of-type(1)').textContent })));
    }
    await browser.close();
    return { reviewCount: +reviewCount, reviewArray: reviewArray, url: url };
};

module.exports.extractReviews = extractReviews