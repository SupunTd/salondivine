const nodemailer = require("nodemailer");

const sendEmail = async (email,url) => {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.HOST,
            service: process.env.SERVICE,
            port: Number(process.env.EMAIL_PORT),
            secure: Boolean(process.env.EMAIL_SECURE),
            auth: {
                user: process.env.USER,
                pass: process.env.PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.USER,
            to: email,
            subject: 'Confirm your email address',
            html: `<p>Hi New One, </p><p>Please click the following link to confirm your email address:
                            </p><a href="${url}">${url}</a>`
        });

        console.log("Email sent successfully");
    } catch (error) {
        console.log("Email not sent");
        console.log(error);
    }
};

module.exports = sendEmail;
