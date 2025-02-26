import nodemailer from "nodemailer";

// (where i should send email, )
export const sendEmail = async ({name, email, subject, message}) => {

    try {     
        // send email
        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAILER_USER,
                pass: process.env.MAILER_PASSWORD,
            }
            }
        );
        
        // mail options
        const mailOptions = {   
            from: process.env.MAILER_USER,
            to: 'faresrahm40@gmail.com',
            subject: subject,
            html: `<h3>Name : ${name}</h3> <h3>Email : ${email}</h3> <p>${message}</p>`

        };

        const mailResponse = transport.sendMail(mailOptions);
        return mailResponse;
        
    } catch (error) {
        console.log(error);
    }
};