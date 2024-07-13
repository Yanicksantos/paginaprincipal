import { defineEventHandler, readBody } from 'h3';
import nodemailer from 'nodemailer';

interface EmailBody {
  name: string;
  email: string;
  message: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<EmailBody>(event);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        .email-container {
          font-family: Arial, sans-serif;
          color: #333;
        }
        .header {
          background-color: #f7f7f7;
          padding: 10px;
          text-align: center;
        }
        .content {
          padding: 20px;
        }
        .footer {
          background-color: #f7f7f7;
          padding: 10px;
          text-align: center;
          font-size: 12px;
          color: #999;
        }
      </style>
    </head>
    <body>
      <div class="email-container">
        <div class="header">
          <h1>Novo Contato</h1>
        </div>
        <div class="content">
          <p><strong>Nome:</strong> ${body.name}</p>
          <p><strong>Email:</strong> ${body.email}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${body.message}</p>
        </div>
        <div class="footer">
          <p>Obrigado por entrar em contato conosco.</p>
        </div>
      </div>
    </body>
    </html>
  `;
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
    //text: `Nome: ${body.name}\nEmail: ${body.email}\nMensagem: ${body.message}`
    html: htmlContent
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
});
