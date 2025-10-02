import nodemailer from 'nodemailer';

// Email configuration using Gmail (can be modified to use other services)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'marutidalvi0001@gmail.com',
    pass: 'kckiqfvjsbtvnags',
  },
});

// Model: Send email
const sendContactEmail = async (name, email, message) => {
  const mailOptions = {
    from: email,
    to: 'marutidalvi0001@gmail.com',  // Destination email
    subject: `New Message from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
    return { success: true, message: 'Message sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error sending email.' };
  }
};

export default sendContactEmail ;
