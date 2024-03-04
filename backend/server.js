const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://abuahm0607:abu123@cluster0.ycxafxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.listen(5000, () => {
    mongoose.connect(dbURI)
        .then(console.log('db conect'))
        .catch(err => console.log(err))
});

app.get('/', (req, res) => res.render('home'));

