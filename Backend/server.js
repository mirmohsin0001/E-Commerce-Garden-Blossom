import express from 'express'
import mongoose from 'mongoose'

const app = express();

// middleware
app.use(express.static('public'));


// database connection
const dbURI = 'mongodb+srv://root:root@book-store-mern.mfuqgka.mongodb.net/?retryWrites=true&w=majority&appName=Book-Store-MERN';
mongoose.connect(dbURI)
    .then((result) => (app.listen(3000), console.log('mongoDB Connected')))
    .catch((err) => console.log(err));



// routes
app.get('/', (req, res) => res.render('home'));
app.get('/smoothies', (req, res) => res.render('smoothies'));