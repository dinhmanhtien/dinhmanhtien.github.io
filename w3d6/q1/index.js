const express = require('express');
const path = require('path');
const app = express();
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.get('/', (req, res) => {
    var currentD = new Date();
    var startDayCSS = new Date();
    startDayCSS.setHours(6, 0, 0);
    var endDayCSS = new Date();
    endDayCSS.setHours(18, 0, 0);
    var css = 'night';
    if (currentD >= startDayCSS && currentD < endDayCSS) {
        css = 'day';
    }
    const date = new Date();
    res.render("index", { time: date.toTimeString(), css: css});
});

app.listen(3000, () => {
    console.log('Server is starting ...');
});