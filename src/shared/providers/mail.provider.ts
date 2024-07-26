import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

interface EmailData {
  to: string;
  subject: string;
  templateId?: string;
  dynamicTemplateData?: Record<string, unknown>;
  from?: string;
}

@Injectable()
export class MailProvider {
  private readonly apiKey: string = process.env.MAILERSEND_API_TOKEN;
  private readonly fromEmail: string = process.env.MAILERSEND_FROM_EMAIL;
  private readonly logger = new Logger(MailProvider.name);
  private readonly mailerSend = new MailerSend({
    apiKey: this.apiKey,
  });

  async sendEmail(data: EmailData): Promise<void> {
    const { to, subject, templateId, dynamicTemplateData, from } = data;

    if (!to || !subject || !templateId) {
      throw new BadRequestException('Missing required fields');
    }

    const sentFrom = new Sender(from || this.fromEmail);
    const recipients = [new Recipient(to)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(subject);

    if (templateId) {
      emailParams.setTemplateId(templateId);
    }

    if (dynamicTemplateData) {
      const personalization = [
        {
          email: to,
          data: dynamicTemplateData,
        },
      ];
      emailParams.setPersonalization(personalization);
    }

    try {
      await this.mailerSend.email.send(emailParams);
      this.logger.log(`Email sent to ${to}`);
    } catch (error) {
      this.logger.error(error);
      console.log('error', error);
      throw new BadRequestException('Error sending email', error);
    }
  }
}
