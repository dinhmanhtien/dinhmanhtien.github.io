const express = require('express');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();(


app.set('views', path.join(__dirname,'views')));
app.set('view engine', 'ejs')

//app.use(express.static(path.join(__dirname,"public")));
app.use(session({secret:'my secret'}));
app.use(cookieParser());
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));

app.get('/',(req,res) =>{
    res.render('index');
});

app.get('/8ball', (req,res) =>{
    res.end();
});


app.listen(3000,()=>{console.log("Application is running ...")});


