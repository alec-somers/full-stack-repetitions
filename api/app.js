const express = require('express');
const app = express();
const cors = require('cors');
const knex = require('knex')(require('./knexfile.js')['development'])
const port = 8080;

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send("Connected to root route")
})

app.get('/movies', (req, res) => {
    knex('favorites')
        .select('*')
        .then( movieList => {
            res.status(200).json(movieList)
        })
})


app.listen(port, () => {
    console.log('Express app listening on port ', port)
})

