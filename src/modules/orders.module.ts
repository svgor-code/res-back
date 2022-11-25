import { Module } from "@nestjs/common";
import { OrdersController } from "src/controllers/orders.controller";
import { OrdersService } from "src/services/orders.service";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}