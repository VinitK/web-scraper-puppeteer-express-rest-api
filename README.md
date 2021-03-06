# Get Reviews of a Product from TigerDirect using Puppeteer and Express for creating a REST API.

The application is a REST API where on can pass a product page URL from TigerDirect's website and get back all reviews and related information of that product.

## Use Application
Go to https://immense-eyrie-73037.herokuapp.com/ and try out the application live. Use example URL (http://www.tigerdirect.com/applications/SearchTools/item-details.asp?EdpNo=3415697) to try on the application. This application is hosted on Heroku.

# For Developers

## Getting Started
Open a new project folder.
Clone the git repository by running the following command in terminal:
```
git clone https://github.com/VinitK/web-scraper-puppeteer-express-rest-api.git
```
To install all dependencies run the following command:
```
npm install
```
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Git - Download & Install Git. OSX and Linux machines typically have this already installed.
Node.js - Download & Install Node.js and the npm package manager.

### Installing

Install NodeJS

```
npm install node --save
```
Install ExpressJS
```
npm install express --save
```
Install Puppeteer
```
npm install puppeteer --save
```

### Built With

* [Puppeteer](https://github.com/GoogleChrome/puppeteer) - The web framework used

## How to use
The application on running on server/localhost allows users to call < domain >/reviews/?url=< TradeTiger product page URL >

### Author

**Vinit Khandelwal**