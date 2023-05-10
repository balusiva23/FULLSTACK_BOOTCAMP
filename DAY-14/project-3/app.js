const url = require('url');

const address = "http://localhost:4000/default.html?year=2017";

let result = url.parse(address);
console.log(result);