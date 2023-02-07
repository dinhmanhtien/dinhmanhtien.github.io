const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');
const session = require('express-session');
app.use(bparser.urlencoded());
app.use(express.json());
app.use(session({secret: "mysupersecretstring"}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/should',(req, res)=> {
    console.log(req.session);
    Object.entries(req.session).forEach(([key, value]) => {  
        console.log(`${key}: ${value}`)
      })
      
    res.render('should', {sessions: req.session});
});

app.get('/add',(req, res)=> {

    res.render('add');
});

app.get('/',(req, res)=> {

    res.redirect('/should');
});

app.post('/add', (req, res) => {
    let key = req.body.key;
    let value = req.body.value
    console.log(key + " - " + value);
    req.session[key] = value;
    res.redirect('/should');
});

app.listen(3000, () => {console.log("Server is running ...")});