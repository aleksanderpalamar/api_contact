import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

export interface ContactDataProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable()
export class ContactService {
  async sendEmail(contactData: ContactDataProps): Promise<void> {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: 'Contact Form site',
      html: `
        <h3>Informações Contact</h3>
        <ul>
          <li>Name: ${contactData.name}</li>
          <li>Email: ${contactData.email}</li>
          <li>Subject: ${contactData.subject}</li>
          <li>Message: ${contactData.message}</li>
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
}
