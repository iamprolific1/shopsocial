import nodemailer from "nodemailer";
// const nodemailer = require('nodemailer')

export const transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    service: "gmail",
    port: 587,
    auth: {
        user: "abdulmalikabdulrahman76@gmail.com",
        pass: "cblhjuugehmcfgyq"
    },
});

export async function main(): Promise<void> {
    //send mail with the defined transporter
    try {
        
        const info = await transporter.sendMail({
            from: '"ShopSocial" <abdulmalikabdulrahman76@gmail.com>',
            to: "prolificmk20@gmail.com",
            subject: "Hello from ShopSocial!",
            text: "Hello, this is your first email sent through ShopSocial's automated email system. Please let me know if you need any further assistance.",
        });

        console.log("Message sent: %s", info.messageId)
    } catch (error) {
        console.error("Error sending message: ", error);
    }
}