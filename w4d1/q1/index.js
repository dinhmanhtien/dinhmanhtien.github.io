const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(bparser.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req, res)=> {
    // let u = path.join(__dirname , 'form.html');
    console.log(req.cookies);
    Object.entries(req.cookies).forEach(([key, value]) => {  
        console.log(`${key}: ${value}`)
      })
      

    // res.sendFile(u);
    res.render('form', {cookies: req.cookies});
});

app.post('/cookie', (req, res) => {
    let key = req.body.key;
    let value = req.body.value
    console.log(key + " - " + value);
    res.cookie(key,value, {maxAge: 60 *1000});
    res.redirect('/');
});

app.listen(3000, () => {console.log("Server is running ...")});