import { Module } from '@nestjs/common';
import { AppController } from 'src/controllers/app.controller';
import { AppService } from 'src/services/app.service';
import { OrdersModule } from 'src/modules/orders.module';
import { UserModule } from 'src/modules/user.module';
import { DishModule } from 'src/modules/dish.module';
import { TableModule } from 'src/modules/table.module';
import { AuthService } from 'src/services/auth.service';
import { AuthModule } from './auth.module';

@Module({
  imports: [OrdersModule, UserModule, DishModule, TableModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
