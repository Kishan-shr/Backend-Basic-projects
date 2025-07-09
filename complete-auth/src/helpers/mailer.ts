import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
export const sendEmail =  async ({email,emailType,userId:any})=>{
 try {
    //TODO: configure mail for usage 
   const hashedToken = await bcrypt.hash(userId.toString(),10)
    if (emailType==="VERIFY"){
        await User.findBYIdAndUpdate(userId,
          {verifyToken:hashedToken,verifyTokenExpiry:Date.now() + 3600000}
        )
    } else if (emailType === "RESET"){
     await User.findBYIdAndUpdate(userId,
          {forgotPasswordToken:hashedToken,forgotPasswordTokenExpiry:Date.now() + 3600000})
    }
// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fb6e56f5eabff5", // never user this keys in files it should be always in .env
    pass: "fd18844355bd33" // never user this keys in files it should be always in .env
  }
});
const mailOptions = {
    from: 'kishan.shr', //sender address
    to: "email", 
    subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", //subject line
    text: "Hello world?", // plain‑text body
    html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${EmailType === "VERIFY" ? "Verify your email":"reset your password"}
      or copy and paste the link below in your browser.
    <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
    </p>`, // HTML body}
 } 
 const mailResponse = await transport.sendMail(mailOptions)
 return mailOptions
 catch (error) {
    throw new Error(error.message);
 }
}
}