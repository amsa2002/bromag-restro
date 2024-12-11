const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASS
    },
    debug: true, // Enable debug mode
    logger: true,
  })

  module.exports = transporter