const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');
app.use(bparser.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get('/',(req, res)=> {
    let u = path.join(__dirname , 'form.html');
    res.sendFile(u);
});

app.post('/result',(req, res) => {
    // console.log(req.body);
    let name = req.body["name"];
    let age = req.body["age"];
    res.render("index", { name: name, age: age});
});


app.listen(3000, () => {console.log("Server is running ...")});