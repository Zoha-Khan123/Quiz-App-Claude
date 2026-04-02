import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendVerificationEmail = async (to, token) => {
  const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${token}`;

  await transporter.sendMail({
    from: `"Quiz App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Verify Your Email - Quiz App",
    html: `
      <h2>Welcome to Quiz App!</h2>
      <p>Click the button below to verify your email:</p>
      <a href="${verifyUrl}" style="background:#4CAF50;color:white;padding:12px 24px;text-decoration:none;border-radius:5px;display:inline-block;">Verify Email</a>
      <p>Or copy this link: ${verifyUrl}</p>
      <p>This link expires in 24 hours.</p>
    `,
  });
};

export const sendResetEmail = async (to, token) => {
  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: `"Quiz App" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Reset Your Password - Quiz App",
    html: `
      <h2>Password Reset Request</h2>
      <p>Click the button below to reset your password:</p>
      <a href="${resetUrl}" style="background:#2196F3;color:white;padding:12px 24px;text-decoration:none;border-radius:5px;display:inline-block;">Reset Password</a>
      <p>Or copy this link: ${resetUrl}</p>
      <p>This link expires in 15 minutes.</p>
    `,
  });
};
