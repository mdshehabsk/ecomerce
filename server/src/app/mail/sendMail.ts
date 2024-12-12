import nodemailer from "nodemailer";
import ejs from "ejs";
import path from "path";
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
  // eslint-disable-next-line no-undef
  const filePath = path.join(__dirname, "..", "..", "views");
  const fileVal = await ejs.renderFile(`${filePath}/email.ejs`, {
    token,
    username,
  });
  const mailSend = await transporter.sendMail({
    from: `pickaboo <${config.mail_user}>`,
    to: email,
    subject,
    html: fileVal,
  });
  return mailSend;
};