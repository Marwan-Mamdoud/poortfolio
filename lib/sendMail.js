"use server";
import nodemailer from "nodemailer";

const now = new Date();
const formattedTime = now.toLocaleString("en-US", {
  weekday: "long", // اسم اليوم
  month: "long", // اسم الشهر
  day: "numeric", // رقم اليوم
  hour: "2-digit", // الساعة
  minute: "2-digit", // الدقيقة
  hour12: false, // صيغة 24 ساعة
});
export const sendMail = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marwanmamdouh159@gmail.com", // إيميلك
        pass: "xyij jeon nxzg pegp", // app password
      },
    });

    const mailOptions = {
      from: "marwanmamdouh159@gmail.com",
      to: "marwanmamdouh159@gmail.com",
      subject: "🚀 New Visitor on Your Site",
      text: `A new visitor just accessed your site.\n\n ${formattedTime}`,
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("error from send mail", error);
  }
};
