import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/users.dto';
import * as bcrypt from 'bcrypt';
import { MailProvider } from 'src/shared/providers/mail.provider';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private readonly mailProvider: MailProvider,
  ) {}

  async createUser(data: CreateUserDto) {
    const { email, password, name } = data;

    const emailAlreadyExists = await this.emailExists(email);

    if (emailAlreadyExists) {
      throw new ConflictException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    await this.mailProvider.sendEmail({
      subject: process.env.MAILERSEND_WELCOME_SUBJECT,
      to: email,
      from: process.env.MAILERSEND_FROM_EMAIL,
      dynamicTemplateData: {
        name,
      },
      templateId: process.env.MAILERSEND_TEMPLATE_ID_WELCOME,
    });

    return user;
  }
  async getUsers() {
    return this.prisma.user.findMany();
  }

  async emailExists(email: string): Promise<boolean> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return !!user;
  }
}
