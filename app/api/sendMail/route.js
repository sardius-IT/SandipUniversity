import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, mobile } = await req.json();

    if (!name || !email || !mobile) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    console.log("📥 Received form data:", { name, email, mobile });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sandipuniversity81@gmail.com",
        pass: "gdobzkqtratezyfx", // ✅ App Password only
      },
      tls: {
        rejectUnauthorized: false, // ✅ Needed for self-signed certs
      },
    });

    const info = await transporter.sendMail({
      from: '"Sandip University" <sandipuniversity81@gmail.com>', // ✅ Use actual sender email
      to: "sandipuniversity81@gmail.com", // ✅ Receiver
      subject: "New Admission Enquiry",
      html: `
         <h2>New Admission Enquiry</h2>
  <table style="border-collapse: collapse; width: 100%; max-width: 500px;">
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;"><strong>Name</strong></td>
      <td style="border: 1px solid #ccc; padding: 8px;">${name}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;"><strong>Email</strong></td>
      <td style="border: 1px solid #ccc; padding: 8px;">${email}</td>
    </tr>
    <tr>
      <td style="border: 1px solid #ccc; padding: 8px;"><strong>Mobile</strong></td>
      <td style="border: 1px solid #ccc; padding: 8px;">${mobile}</td>
    </tr>
  </table>
      `,
    });

    console.log("✅ Email sent:", info.messageId);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("❌ Error sending email:", err.message);
    return new Response(
      JSON.stringify({ error: "Email sending failed", detail: err.message }),
      { status: 500 }
    );
  }
}
