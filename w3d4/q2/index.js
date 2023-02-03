const express = require('express');
const app = express();
const path = require('path');
const bparser = require('body-parser');
app.use(bparser.urlencoded());
app.use(express.json());

app.get('/',(req, res)=> {
    let u = path.join(__dirname , 'form.html');
    // console.log(u);
    res.sendFile(u);
});

app.post('/result',(req, res) => {
    console.log(req.body);
    let name = req.body["name"];
    let age = req.body["age"];
    res.send(`Welcome ${name}, you are ${age} years old`);
});


app.listen(3000, () => {console.log("Server is running ...")});