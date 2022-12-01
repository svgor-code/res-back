import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/user.controller';
import { PrismaModule } from 'src/modules/prisma.module';
import { UserService } from 'src/services/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [PrismaModule],
})
export class UserModule {}
