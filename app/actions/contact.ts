'use server'

// import nodemailer from 'nodemailer'
//use this
export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get('name')?.toString();
    const email = formData.get('email')?.toString();
    const message = formData.get('message')?.toString();

    if (!name || !email || !message) {
      throw new Error("Invalid form data");
    }

    // Create transporter
    // const transporter = nodemailer.createTransport({
      // service: "gmail",
      // auth: {
        // user: "jcstocksofficial@gmail.com",
        // pass: "dmdk ajsa opjr wwzw",
      // },
    // });

    // Define email options
    // const mailOptions = {
      // from: `"${name}" <${email}>`, // Sender's name and email
      // to: "jcstocksofficial@gmail.com", // Your email
      // subject: "Contact Form Query",
      // html: `
        // <h1>Contact Form Query</h1>
        // <p><b>Name:</b> ${name}</p>
        // <p><b>Email:</b> ${email}</p>
        // <p><b>Message:</b> ${message}</p>
      // `,
    // };

    // Send email
    // await transporter.sendMail(mailOptions);

    return {
      success: true,
      message: "Thank you for your message. We'll get back to you soon!",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}

