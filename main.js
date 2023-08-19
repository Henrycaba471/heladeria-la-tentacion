const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const conectionMongo = require('./database/db');
const bodyParser = require('body-parser');

conectionMongo();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

dotenv.config({path: './env/.env'})

app.use(cookieParser());

const userRoutes = require('./routes/user');
app.use('/', userRoutes);


app.listen(3000, () => {
    console.log('listening on  http://localhost:3000')
});

