const emailjs = require('emailjs-com');

exports.handler = async (event, context) => {
  // Make sure the request method is POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405, // Method Not Allowed
      body: JSON.stringify({ message: 'Only POST requests are allowed' }),
    };
  }

  // Parse incoming JSON data
  const { name, email, message } = JSON.parse(event.body);

  // Set up the EmailJS parameters
  const serviceId = process.env.;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const userId = process.env.EMAILJS_USER_ID;

  try {
    // Send the email using EmailJS
    await emailjs.send(serviceId, templateId, {
      from_name: name,
      from_email: email,
      message,
    }, userId);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully!' }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email', error: error.message }),
    };
  }
};
