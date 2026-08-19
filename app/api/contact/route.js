import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, vertical, service, message } = body;

    const selectedVertical = vertical || service || 'General Inquiry';

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and phone number are required.' },
        { status: 400 }
      );
    }

    console.log('[Atlas Communication API] Form submission received:', {
      name,
      email,
      phone,
      company: company || 'N/A',
      vertical: selectedVertical,
      message: message || 'N/A',
      timestamp: new Date().toISOString(),
    });

    // Configure Nodemailer Transporter using premium257.web-hosting.com
    const transporter = nodemailer.createTransport({
      host: 'premium257.web-hosting.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@atlascommunication.us',
        pass: 'wfT9IjS8I63nDFw9',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #790708; max-width: 600px; margin: 0 auto; border: 2px solid #790708; border-radius: 12px; padding: 24px; background-color: #ffffff;">
        <h2 style="color: #790708; border-bottom: 2px solid #790708; padding-bottom: 12px; margin-top: 0;">
          New Lead Submission - Atlas Communication
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 8px; font-weight: bold; width: 35%; border-bottom: 1px solid #eee;">Full Name:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Corporate Email:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Phone Number:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><a href="tel:${phone}">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Company / Agency:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${company || 'N/A'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Target Vertical:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>${selectedVertical}</strong></td>
          </tr>
          <tr>
            <td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #eee;">Message / Details:</td>
            <td style="padding: 8px; border-bottom: 1px solid #eee;">${message || 'N/A'}</td>
          </tr>
        </table>
        <p style="margin-top: 24px; font-size: 0.85rem; color: #666; text-align: center; border-top: 1px solid #eee; padding-top: 12px;">
          Received from www.atlascommunication.us website lead form.
        </p>
      </div>
    `;

    // ⚡ Fast Asynchronous Mail Dispatch (non-blocking)
    transporter
      .sendMail({
        from: 'info@atlascommunication.us',
        to: 'info@atlascommunication.us',
        replyTo: email,
        subject: `New Lead Inquiry: ${name} (${selectedVertical})`,
        html: htmlContent,
      })
      .then((info) => {
        console.log('[Atlas Communication SMTP Success] Email sent ID:', info.messageId);
      })
      .catch((err) => {
        console.error('[Atlas Communication SMTP Error]:', err.message);
      });

    // Return instant success response (<50ms speed)
    return NextResponse.json({
      success: true,
      message: `Thank you, ${name}! Your inquiry for ${selectedVertical} has been received by Atlas Communication. Our team will contact you at ${phone} or ${email} shortly.`,
    });
  } catch (error) {
    console.error('[Atlas Communication API Error]:', error);
    return NextResponse.json(
      { success: false, error: 'An internal error occurred while processing your request.' },
      { status: 500 }
    );
  }
}
