import nodemailer from "nodemailer";
import dotenv from "dotenv";
import path from "path";
dotenv.config();
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const transporter = nodemailer.createTransport({
    // host: 'localhost',
    // port: 1025,
    service: 'gmail',
    auth: {
        user: 'tba235854@gmail.com',
        pass: process.env.APP_PASSWD
    }
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const mailOptions = {
  from: "tba235854@gmail.com",
  to: "hemanthraja2004@gmail.com",
  subject: 'Hello World',
  html: fs.readFileSync(path.join(__dirname, '../../templates/test.html'), 'utf8')
};
  
transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      console.log("Error " + err);
    } else {
      console.log("Email sent successfully");
    }
  console.log(data);
  // console.log(i)
  });