const dotenv=require('dotenv');
require('dotenv').config();
const nodemailer=require('nodemailer');
 const transporter=nodemailer.createTransport({
    secure:true,
    host:'smtp.gmail.com',
    port:465,
    auth:{
        user:process.env.USER_EMAIL,
        pass:process.env.USER_PASS,
    }
})
function sendMail(to,sub,msg){
    transporter.sendMail({
        to:process.env.USER_EMAILTO,
        subject:"email verification",
        html:'please verify the email'
    });
    console.log('Email has been sent');
    
}
sendMail();
