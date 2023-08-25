const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dineshkumar.veeramani@axesstechnology.in',  // Your email address
    pass: 'iojsywqojbmdvctp'  // Your email password (use an app-specific password if using Gmail)
  }
});

// Email content
const mailOptions = {
  from: 'dineshkumar.veeramani@axesstechnology.in', // Sender address
  to: 'dineshkumar.veeramani@axesstechnology.in', // Recipient address
  subject: 'Test Email', // Subject line
  text: 'This is a test email sent from Node.js' // Email content
};

// Send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('Error occurred:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
