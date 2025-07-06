import bcrypt from 'bcryptjs';
import nodemailer from 'nodemailer';
export const sendEmail = async ({email,emailType,userId:any})=>{
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
const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "maddison53@ethereal.email",
    pass: "jn7jnAPss4f63QBp6D",
  },
});
const mailOptions = {
    from: '"Maddison Foo Koch" <maddison53@ethereal.email>', //sender address
    to: "email", 
    subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password", //suject line
    text: "Hello world?", // plain‑text body
    html: "<b>Hello world?</b>", // HTML body}
 } 
 const mailResponse = await transporter.sendMail(mailOptions)
 catch (error) {
    throw new Error(error.message);
 }
}
}