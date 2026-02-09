import nodemailer from 'nodemailer';

export function sendMail(email,password)
{
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vilekhofficial@gmail.com',
        pass: 'zlidkshduelfzlvd'
      }
    });
    
    let mailOptions = {
      from: 'vilekhofficial@gmail.com',
      to: email,
      subject: 'Verification Email RoomRent.com',
      html: "<h1>Welcome To RoomRent.com</h1><p>You have successfully registered to our site , your login credentials are attached below</p><h3>Username : "+email+"</h3><h3>Password : "+password+"</h3><h1>Click on the link below to redirect</h1><a href='http://localhost:3000/verify/"+email+"'>Click to verify....</a>"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
}
