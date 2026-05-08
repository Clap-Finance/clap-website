import nodemailer from "nodemailer";

/**
 * Singleton Gmail SMTP transporter.
 * Reused across requests in the same server process.
 */
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // SSL — use port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS, // Gmail App Password (16 chars, no spaces)
  },
});

export type SendMailOptions = {
  to: string;
  subject: string;
  html: string;
  text?: string; // Plain-text fallback (recommended for deliverability)
};

/**
 * Send a transactional email via Gmail SMTP.
 *
 * @throws Will throw if SMTP credentials are missing or sending fails.
 */
export async function sendMail({ to, subject, html, text }: SendMailOptions) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    throw new Error(
      "SMTP_USER and SMTP_PASS must be set in environment variables.",
    );
  }

  const info = await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to,
    subject,
    html,
    ...(text ? { text } : {}),
  });

  return info;
}