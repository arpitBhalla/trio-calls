import nodemailer from "nodemailer";
import { createEvent, EventAttributes } from "ics";

export const sendInvite = async (
  to: string = "",
  subject: string = "",
  body: string = "",
  event: EventAttributes
) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });
  const { value } = createEvent(event);

  let info = await transporter.sendMail({
    from: '"You are invited for MS Teams meeting" <teams-invite@microsoft.com>', // sender address
    to,
    subject,
    html: body,
    icalEvent: {
      filename: "invitation.ics",
      method: "request",
      content: value || "",
    },
  });

  console.log("Message sent: %s", info.messageId);

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
