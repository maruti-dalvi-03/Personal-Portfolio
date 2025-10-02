// This is the configuration used in contactModel.js to send emails.
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marutidalvi0001@gmail.com',
    pass: 'kckiqfvjsbtvnags',
  },
});

module.exports = transporter;
