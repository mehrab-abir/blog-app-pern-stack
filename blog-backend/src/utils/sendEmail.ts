import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mehrababir100@gmail.com",
    pass: process.env.APP_PASSWORD
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const sendEmail = async (to:string, subject:string, html:any) => {
  const info = await transporter.sendMail({
    from: '"Blog App" <abir.admin@blog.email>',
    to,
    subject,
    html,
  });

  console.log("Email sent:", info.messageId);
};
