import nodemailer, { SendMailOptions } from "nodemailer";

export const sendMail = async (options: SendMailOptions = {}) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER || "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME || testAccount.user,
      pass: process.env.EMAIL_PASSWORD || testAccount.pass,
    },
  });

  let info = await transporter.sendMail(options);
  console.log(info);

  if (process.env.DEV) {
    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }
};
