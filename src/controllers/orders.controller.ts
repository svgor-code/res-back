import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';
import { IOrder } from 'src/interfaces/order';
import { OrdersService } from 'src/services/orders.service';
import { Order, Order as OrderModel, OrderStatusEnum } from '@prisma/client'

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.getOne({ id: +id});
  }

  @Get()
  async findAll(): Promise<OrderModel[]> {
    return this.ordersService.getAll({});
  }

  @Post()
  @HttpCode(204)
  async create(@Body() createOrderDto: CreateOrderDto): Promise<OrderModel> {
    return this.ordersService.create(createOrderDto);
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<OrderModel> {
    return this.ordersService.update({
      where: { id: +id},
      data: updateOrderDto
    });
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.delete({ id: +id });
  }
}
