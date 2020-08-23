const nodemailer = require('nodemailer');

const adminEmail = process.env.adminEmail;
const adminPassword = process.env.adminPassword;

const mailHost = 'smtp.gmail.com';
const mailPort = 587;

const sendMail = function(to, subject, htmlContent){
    const transporter = nodemailer.createTransport({
        host: mailHost,
        port: mailPort,
        secure: false,
        auth: {
            user: adminEmail,
            pass: adminPassword
        }
    });

    const options = {
        from: adminEmail,
        to: to,
        subject: subject,
        htmlContent: htmlContent
}    

    return transporter.sendMail(options);
} 

module.exports = {
    sendMail: sendMail
}