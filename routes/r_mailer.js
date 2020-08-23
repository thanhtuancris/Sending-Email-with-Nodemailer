const express = require('express');
const router = express.Router;
const c_home = require('../controllers/c_home');
const c_mailer = require('../controllers/c_mailer');

let initRoutes = (app) => {
    //goi trang home
    router.get('/', c_home.getHome);

    //goi c_mailer (goi hanh dong gui email)
    router.post('/send-email', c_mailer.sendMail);

    return app.use('/', router);
}

module.exports = initRoutes;