import { Module } from '@nestjs/common';
import { OrdersController } from 'src/controllers/orders.controller';
import { OrdersService } from 'src/services/orders.service';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [PrismaModule]
})
export class OrdersModule {}
