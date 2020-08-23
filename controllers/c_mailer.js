const mailer = require('../nodeMailer/nodemailer');

let sendMail = async function(req, res){
    try {
        const {to, subject, htmlContent} = req.body;
        //Thuc hien gui email
        await mailer.sendMail(to, subject, htmlContent);
        res.send("<h3>Your email has been sent successfully.</h3> ");
    }catch(error){
        res.send(error);
    }
}

module.exports = {
    sendMail: sendMail
}