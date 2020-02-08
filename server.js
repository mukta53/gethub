const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())

const MongoClient = require('mongodb').MongoClient;
let db;
MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    db = client.db('cw')
})

app.param('users', (req, res, next, collectionName) => {
    req.collection = db.collection(collectionName)
    // console.log('collection name:', req.collection)
    return next()
})

app.get('/', function (req, res) {
    res.send('Select a collection, e.g., /collections/users')
})




app.get('/collections/:users', (req, res) => {
    req.collection.find({}, { limit: 5, sort: [['price', -1]] }).toArray((e, results) => {
        if (e) return next(e)
        res.send(results)
    })
})

app.post('/collections/:collectionName', (req, res, next) => {
    
    req.collection.insert(req.body, (e, results) => {
        if (e) return next(e)
        res.send(results.ops)
    })
})

const ObjectID = require('mongodb').ObjectID;
app.get('/collections/:collectionName/:id', (req, res, next) => {
    console.log('searching json object with id:', req.params.id)
    req.collection.findOne({ _id: new ObjectID(req.params.id) }, (e, result) => {
        if (e) return next(e)
        res.send(result)
    })
})

app.put('/collections/:collectionName/:id', (req, res, next) => {
    req.collection.update({ _id: new ObjectID(req.params.id) },
        { $set: req.body },
        { safe: true, multi: false }, (e, result) => {
            if (e) return next(e)
            res.send((result.result.n === 1) ? { msg: 'success' } : {
                msg: 'error' })
})
        })
  
    app.delete('/collections/:collectionName/:id', (req, res, next) => {
        req.collection.deleteOne({ _id: ObjectID(req.params.id) }, (e, result) => {
            if (e) return next(e)
            res.send((result.result.n === 1) ? { msg: 'success' } : { msg: 'error' })
        })
    })
    app.listen(3000)

const data = { username: '' };
fetch(' ', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then((response) => response.json())
    .then((data) => {
        console.log('Success:', data);
    })

    const express = require('express')
// initiate Expree
let app = express()
const lessons = [
{ 'topic': 'math', 'location': 'hendon', 'price': 100 },
{ 'topic': 'math', 'location': 'colindale', 'price': 80 },
{ 'topic': 'math', 'location': 'brent cross', 'price': 90 },
{ 'topic': 'math', 'location': 'golders green', 'price': 120 },
];

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", " ");
next();
});

app.get('/', (req, res) => {
res.send(JSON.stringify(lessons));
})


app.listen(3000, () => {
console.log('Express.js server is listening on port 3000')
})

    