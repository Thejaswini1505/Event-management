import nodemailer from "nodemailer";

const sendEmail = async (to, subject, text) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nivfeb19@gmail.com",      
        pass: "tcxa gzhf jzth hscd",           // use Gmail App Password
      },
    });

    await transporter.sendMail({
      from: '"Event Team" nivfeb19@gmail.com',
      to,
      subject,
      text,
    });

    console.log(`✅ Email sent to ${to}`);
  } catch (error) {
    console.error("❌ Error sending email:", error);
  }
};

export default sendEmail;
