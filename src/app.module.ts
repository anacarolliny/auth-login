import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { ProvidersModule } from './shared/providers/providers.module';

@Module({
  imports: [PrismaModule, UsersModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
