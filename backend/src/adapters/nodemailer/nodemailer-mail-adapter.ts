import nodemailer from 'nodemailer'
import { SendMailData, MailAdapter } from "../mail-adapter";


export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) { 
    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "5ea9684634c7b0",
        pass: "18b5126d02c287"
      }
    });

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Marcos Paulo <eumarcosborgs@gmail.com>',
        subject,
        html: body
      })
  }
}