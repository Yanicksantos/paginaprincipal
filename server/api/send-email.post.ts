import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

interface EmailBody {
  name: string;
  email: string;
  message: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<EmailBody>(event);

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, 
    port: Number(process.env.SMTP_PORT), 
    secure: false, 
    auth: {
      user: process.env.SMTP_USER, 
      pass: process.env.SMTP_PASS
    }
  });

  const mailOptions = {
    from: 'yanickeduardo04@gmail.com',
    to: 'yanick@pred.com.br',
    subject: 'Novo Contato',
    text: `Nome: ${body.name}\nEmail: ${body.email}\nMensagem: ${body.message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
