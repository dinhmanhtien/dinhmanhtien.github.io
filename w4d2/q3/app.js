const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const indexRoute = require('./routes/index');

const products = require('./models/inventory');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(session({secret: 'my secret', resave: false}));
app.use(express.static(path.join(__dirname, "public")));


app.use('/', indexRoute);


app.listen(3000, ()=>{console.log("Application is running ...")});