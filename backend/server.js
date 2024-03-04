const express = require('express');
const mongoose = require('mongoose');
const Test = require('./model/testData');

const app = express();
const port = 5000;

app.set('view engine', 'ejs');

const dbURI = 'mongodb+srv://abuahm0607:abu123@cluster0.ycxafxz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

app.listen(port, () => {
    mongoose.connect(dbURI)
        .then(console.log('db conect'))
        .catch(err => console.log(err))
});

app.get('/', (req, res) => res.render('home'));

// app.get('/home', async (req, res) => {
//     try {
//         const testDocument = await Test.findOne({tittel:'test'});
//         console.log(testDocument);

//         res.send(testDocument);
//     } catch (error) {
//         console.error(error);
//         res.status(500)
//     }
// })

