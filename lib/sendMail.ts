"use server";
import nodemailer from "nodemailer";

export const sendMail = async ({
  name,
  email,
  inquiry,
  message,
}: {
  name: string;
  email: string;
  inquiry: string;
  message: string;
}) => {
  const now = new Date();
  const formattedTime = now.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "marwanmamdouh159@gmail.com",
        pass: "xmve rouv wkov ywlh",
      },
    });

    const htmlBody = `
      <div style="font-family: 'JetBrains Mono', monospace; background: #0b1326; color: #dae2fd; padding: 40px; max-width: 600px; margin: 0 auto;">
        <div style="border: 2px solid #004526; padding: 30px; background: #171f33;">
          <div style="border-bottom: 2px solid #004526; padding-bottom: 15px; margin-bottom: 20px;">
            <h2 style="color: #97d4aa; font-size: 18px; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">
              &gt; New Inquiry Received
            </h2>
            <p style="color: #8a938a; font-size: 12px; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 0.1em;">
              ${formattedTime}
            </p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="color: #8a938a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">Sender Name</p>
            <p style="color: #97d4aa; font-size: 16px; font-weight: bold; margin: 0;">${name}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="color: #8a938a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">Sender Email</p>
            <p style="color: #dae2fd; font-size: 16px; margin: 0;">${email}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="color: #8a938a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">Inquiry Type</p>
            <p style="color: #98da27; font-size: 14px; font-weight: bold; margin: 0; display: inline-block; border: 1px solid #98da27; padding: 2px 8px;">${inquiry}</p>
          </div>

          <div style="margin-bottom: 20px;">
            <p style="color: #8a938a; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 4px 0;">Message</p>
            <div style="background: #0b1326; border: 1px solid #404942; padding: 15px; font-size: 14px; color: #c0c9bf; line-height: 1.6;">
              &gt; ${message.replace(/\n/g, "<br>&gt; ")}
            </div>
          </div>

          <div style="border-top: 1px solid #404942; padding-top: 15px; margin-top: 20px;">
            <p style="color: #8a938a; font-size: 11px; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">
              &gt; Sent from Official Portfolio Contact Form
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      from: "marwanmamdouh159@gmail.com",
      to: "marwanmamdouh159@gmail.com",
      replyTo: email,
      subject: `[${inquiry}] Portfolio Inquiry from ${name}`,
      text: `New Inquiry from ${name} (${email})\nType: ${inquiry}\n\nMessage:\n${message}\n\nTime: ${formattedTime}`,
      html: htmlBody,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.log("error from send mail", error);
    return { success: false, error: "Failed to send email" };
  }
};
