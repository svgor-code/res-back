import { Module } from '@nestjs/common';
import { DishController } from 'src/controllers/dish.controller';
import { DishService } from 'src/services/dish.service';

@Module({
  controllers: [DishController],
  providers: [DishService],
})
export class DishModule {}
