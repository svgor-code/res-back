import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { OrdersModule } from 'src/modules/orders.module';

@Module({
  imports: [OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
