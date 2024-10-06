import { VERIFICATION_EMAIL_TEMPLATE, WELCOME_EMAIL_TEMPLATE } from "./emailTemplates";
import { transporter } from "./mailer.config";

export const sendVerificationEmail = async (email: string, verificationToken: string): Promise<void>=> {
    const recipient = email;

    try {
        const info = await transporter.sendMail({
            from: '"ShopSocial" <abdulmalikabdulrahman76@gmail.com>',
            to: recipient,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        })
        console.log("Email sent successfully: ", info.messageId)
    } catch (error) {
        console.error("Error sending verification mail: ", error)
    }
};

export const sendWelcomeMail = async (email: string, firstname: string): Promise<void> => {
    const recipient = email;

    try {
        const info = await transporter.sendMail({
            from: '"ShopSocial" <abdulmalikabdulrahman76@gmail.com>',
            to: recipient,
            subject: 'Welcome to ShopSocial',
            html: WELCOME_EMAIL_TEMPLATE(firstname),
        });
        console.log("Welcome email sent successfully: ", info.messageId)
    } catch (error) {
        console.error("Error sending verification email", error);
    }
}