import { Module } from "@nestjs/common";
import { OrdersController } from "./controllers/orders.controller";
import { OrdersService } from "./services/orders.service";

@Module({
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}