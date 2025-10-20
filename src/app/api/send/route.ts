import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message, type, date, time } = await request.json();
    
    // Debug log
    console.log('Received request with data:', { name, email, message, type, date, time });

    // Validate required fields
    if (!email || !name || !message) {
      console.log('Validation failed - missing required fields');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Name, email, and message are required',
          message: 'Please fill in all required fields'
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Validation failed - invalid email format');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid email format',
          message: 'Please enter a valid email address'
        },
        { status: 400 }
      );
    }

    // Create transporter with App Password
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD
      }
    });

    // For scheduled calls
    if (type === 'schedule' && date && time) {
      console.log('Scheduling a call...');
      const eventDetails = {
        from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.GMAIL_EMAIL}>`,
        to: email,
        subject: `Meeting Scheduled with ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb;">Meeting Confirmation</h2>
            <p>Hi ${name},</p>
            <p>Your meeting has been scheduled successfully!</p>
            <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>When:</strong> ${new Date(`${date}T${time}`).toLocaleString()}</p>
              <p><strong>With:</strong> ${process.env.EMAIL_FROM_NAME}</p>
            </div>
            <p>Looking forward to our conversation!</p>
            <p>Best regards,<br/>${process.env.EMAIL_FROM_NAME}</p>
          </div>
        `
      };
      
      try {
        await transporter.sendMail(eventDetails);
        console.log('Confirmation email sent successfully');
      } catch (emailError) {
        console.error('Error sending confirmation email:', emailError);
        throw new Error('Failed to send confirmation email');
      }
    }

    // Send notification to yourself
    const mailOptions = {
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.GMAIL_EMAIL}>`,
      to: process.env.GMAIL_EMAIL,
      subject: type === 'schedule' 
        ? `New Meeting Scheduled with ${name}` 
        : `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        ${type === 'schedule' ? `Meeting Time: ${date} at ${time}` : ''}
        Message: ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">${type === 'schedule' ? 'New Meeting Scheduled' : 'New Contact Form Submission'}</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${type === 'schedule' ? `<p><strong>Meeting Time:</strong> ${date} at ${time}</p>` : ''}
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 10px; border-left: 3px solid #2563eb; margin-top: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
      `,
    };

    console.log('Sending notification email...');
    await transporter.sendMail(mailOptions);
    console.log('Notification email sent successfully');

    return NextResponse.json({ 
      success: true,
      message: type === 'schedule' 
        ? 'Your meeting has been scheduled successfully!' 
        : 'Your message has been sent successfully!'
    });

  } catch (error) {
    console.error('Error in API route:', error);
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage,
        message: 'Failed to process your request. Please try again later.'
      },
      { status: 500 }
    );
  }
}