import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sandipuniversity81@gmail.com",
        pass: "gdobzkqtratezyfx", // App password
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "sandipuniversity81@gmail.com",
      to: "sandipuniversity81@gmail.com",
      subject: "New Sandip University Enquiry",
      html: `
        <h2>New Enquiry - Sandip University</h2>
        <table border="1" cellpadding="8" cellspacing="0" style="border-collapse: collapse; width: 100%;">
          <tr><td><strong>First Name</strong></td><td>${data.firstName}</td></tr>
          <tr><td><strong>Last Name</strong></td><td>${data.lastName}</td></tr>
          <tr><td><strong>Mobile Number</strong></td><td>${data.mobile}</td></tr>
          <tr><td><strong>Email</strong></td><td>${data.email}</td></tr>
          <tr><td><strong>Intermediate Percentage</strong></td><td>${data.interPercentage}</td></tr>
          <tr><td><strong>Category</strong></td><td>${data.category}</td></tr>
          <tr><td><strong>Aadhar Number</strong></td><td>${data.aadhar}</td></tr>
          <tr><td><strong>Pincode</strong></td><td>${data.pincode}</td></tr>
          <tr><td><strong>Stream</strong></td><td>${data.stream}</td></tr>
        </table>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json({ success: false });
  }
}
