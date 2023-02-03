const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');
app.use(bparser.urlencoded());
app.use(express.json());
app.use('/css', express.static(path.join(__dirname, 'css')));
var fs = require('fs');


app.get('/', (req, res) => {
    let filename = path.join(__dirname, 'form.html');
    fs.readFile(filename, 'utf8', (err, words) => {

        var currentD = new Date();
        var startDayCSS = new Date();
        startDayCSS.setHours(6, 0, 0);
        var endDayCSS = new Date();
        endDayCSS.setHours(18, 0, 0);

        if (currentD >= startDayCSS && currentD < endDayCSS) {
            words = words.replace('%_css_%', 'day');
        } else {
            words = words.replace('%_css_%', 'night');
        }
        console.log(words);
        res.send(words);
    });

    // res.sendFile(filename);
});

app.post('/result', (req, res) => {
    console.log(req.body);
    let name = req.body["name"];
    let age = req.body["age"];
    res.send(`Welcome ${name}, you are ${age} years old`);
});


app.listen(3000, () => { console.log("Server is running ...") });