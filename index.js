const express = require('express');
const fs = require('fs');

const readSuperheroes = () => {
    return fs.readFileSync('./data/superheroes.json', 'utf8');
}

const app = express();

app.get('/superheroes', (req, res) => {
    res.end(readSuperheroes());
})

app.listen(3000, () => {
    console.log('Server started on port 3000.');
})
