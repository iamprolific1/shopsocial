import nodemailer from "nodemailer";
// const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_USER_PASSWORD
    },
});

