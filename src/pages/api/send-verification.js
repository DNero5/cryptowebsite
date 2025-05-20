import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"BitWealth" <${process.env.EMAIL_USER}>`,
      to: req.body.email, // recipient email (user's email)
      subject: "Verification Code",
      text: "Your verification code is: 123456", // replace with actual code
      html: "<p>Your verification code is: <strong>123456</strong></p>",
    });

    res.status(200).json({ message: "Verification email sent" });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email" });
  }
}
