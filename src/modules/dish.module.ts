import { Module } from '@nestjs/common';
import { DishController } from 'src/controllers/dish.controller';
import { DishService } from 'src/services/dish.service';
import { PrismaModule } from 'src/modules/prisma.module';

@Module({
  controllers: [DishController],
  providers: [DishService],
  imports: [PrismaModule],
})
export class DishModule {}
