import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    // نجيب IP الزائر
    const forwardedFor = req.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown";

    // إعداد البريد
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
      text: `A new visitor just accessed your site.\n\nIP: ${ip}\nTime: ${new Date().toISOString()}`,
    };

    // إرسال الإيميل
    await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}
