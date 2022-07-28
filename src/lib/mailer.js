const nodemailer = require('nodemailer')

module.exports = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "744e97e9e1f85d",
      pass: "af239686be2e12"
    }
  });