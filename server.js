const express = require('express');
const app = express();
const initRoutes = require('./routes/r_mailer');

app.use(express.urlencoded({extended: true}));

//Khoi tao cac Routes cho ung dung
initRoutes(app);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("Server lisening on port" + port);
});
