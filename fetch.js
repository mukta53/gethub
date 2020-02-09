
const express = require('express')

let app = express()
const lessons = [
    { 'topic': 'math', 'location': 'hendon', 'price': 100 },
    { 'topic': 'math', 'location': 'colindale', 'price': 80 },
    { 'topic': 'math', 'location': 'brent cross', 'price': 90 },
    { 'topic': 'math', 'location': 'golders green', 'price': 120 },
];

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/', (req, res) => {
    res.send(JSON.stringify(lessons));
})

app.listen(3000, () => {
    console.log('Express.js server is listening on port 3000')
})