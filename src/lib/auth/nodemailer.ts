// @ts-ignore
import nodemailer from 'nodemailer';
import { SendVerificationRequestParams } from 'next-auth/providers/email';

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export const sendVerificationRequest = async ({
  identifier: email,
  url,
  provider: { server, from },
}: SendVerificationRequestParams): Promise<void> => {
  const { host } = new URL(url);
  
  const emailHtml = `
    <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
      <h1 style="color: #333; text-align: center;">Sign in to ${host}</h1>
      <p style="color: #666; text-align: center;">Click the button below to sign in:</p>
      <div style="text-align: center; margin: 30px 0;">
        <a href="${url}" 
           style="background-color: #4F46E5; color: white; padding: 12px 24px; 
                  text-decoration: none; border-radius: 5px; display: inline-block;">
          Sign in
        </a>
      </div>
      <p style="color: #666; text-align: center; font-size: 14px;">
        If you didn't request this email, you can safely ignore it.
      </p>
    </div>
  `;

  try {
    const result = await transporter.sendMail({
      to: email,
      from: `${host} <${from}>`,
      subject: `Sign in to ${host}`,
      text: `Sign in to ${host}\n${url}\n\n`,
      html: emailHtml,
    });
    
    console.log('Email sent successfully:', result);
  } catch (error) {
    console.error('SEND_VERIFICATION_EMAIL_ERROR', error);
    throw new Error('Failed to send verification email');
  }
}; 