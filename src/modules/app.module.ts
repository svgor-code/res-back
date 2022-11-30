import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { OrdersModule } from 'src/modules/orders.module';
import { UserModule } from 'src/modules/user.module';
import { DishModule } from 'src/modules/dish.module';

@Module({
  imports: [OrdersModule, UserModule, DishModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
