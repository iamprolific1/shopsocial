import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates";
import { transporter } from "./mailer.config";

export const sendVerificationEmail = async (email: string, verificationToken: string): Promise<void>=> {
    const recipient = {email};

    try {
        const info = await transporter.sendMail({
            from: '"ShopSocial" <abdulmalikabdulrahman76@gmail.com>',
            to: email,
            subject: 'Verify your email',
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        })
        console.log("Email sent successfully: ", info.messageId)
    } catch (error) {
        console.error("Error sending verification mail: ", error)
    }
}