import nodemailer from "nodemailer";
import { getTemplate } from "./template";
import config from "../config";
export const sendMail = async ({
  email,
  token,
  subject,
  username,
}: {
  email: string;
  token: string;
  subject: string;
  username: string;
}) => {
  const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
          user: config.mail_user,
          pass: config.mail_pass,
      },
  });


  const mailSend = await transporter.sendMail({
    from: `pickaboo <${config.mail_user}>`,
    to: email,
    subject,
    html: getTemplate({token:token, username, url: config.base_url}),
  });
  return mailSend;
};