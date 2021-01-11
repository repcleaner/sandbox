const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    //service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    //secure: true,
    //service: 'gmail',

    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
    },
});

module.exports = transporter;