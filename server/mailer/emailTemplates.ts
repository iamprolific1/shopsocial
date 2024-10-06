export const VERIFICATION_EMAIL_TEMPLATE = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Verify Your Email</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Verify Your Email</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p>Hello,</p>
            <p>Thank you for signing up! Your verification code is:</p>
            <div style="text-align: center; margin: 30px 0;">
            <span style="font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #4CAF50;">{verificationCode}</span>
            </div>
            <p>Enter this code on the verification page to complete your registration.</p>
            <p>This code will expire in 15 minutes for security reasons.</p>
            <p>If you didn't create an account with us, please ignore this email.</p>
            <p>Best regards,<br>shopsocial</p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
            <p>This is an automated message, please do not reply to this email.</p>
        </div>
    </body>
    </html>
`;

export const WELCOME_EMAIL_TEMPLATE = (firstname: string)=>`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Welcome to ShopSocial</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(to right, #4CAF50, #45a049); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Welcome to ShopSocial, ${firstname}!</h1>
        </div>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 0 0 5px 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
            <p>Hello ${firstname},</p>
            <p>We are thrilled to have you as part of our community! Your account has been successfully verified, and you're now ready to explore all that ShopSocial has to offer.</p>
            <p>To continue, simply <a href="https://www.shopsocial.com/login" style="color: #4CAF50; text-decoration: none;">log in</a> to your account and start shopping, connecting with others, and enjoying all the benefits of ShopSocial.</p>
            <p>If you have any questions or need assistance, feel free to reach out to us at any time. We're here to help!</p>
            <p>Welcome once again, and we can't wait to see you enjoy your experience at ShopSocial.</p>
            <p>Best regards,<br>The ShopSocial Team</p>
        </div>
        <div style="text-align: center; margin-top: 20px; color: #888; font-size: 0.8em;">
            <p>This is an automated message, please do not reply to this email.</p>
        </div>
    </body>
    </html>
`;
