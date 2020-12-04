const fetch = require('node-fetch');

const getQuote = id => {

fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
.then(res => res.json())
.then(json => console.log(json))
};

getQuote()

