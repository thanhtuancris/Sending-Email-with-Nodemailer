const express = require('express');
const app = express();
const initRoutes = require('./routes/r_mailer');

app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', './views');
//Khoi tao cac Routes cho ung dung
initRoutes(app);

const port = process.env.PORT || 3000;

app.get('/', (req, res) =>{
    res.render('home');
});

app.listen(port, () => {
    console.log("Server lisening on port" + port);
});

module.exports = app;