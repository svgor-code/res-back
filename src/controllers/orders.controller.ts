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
import { OrdersService } from 'src/services/orders.service';
import { Order as OrderModel } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.getOne({ id: +id });
  }

  @Get()
  async findAll(): Promise<OrderModel[]> {
    return this.ordersService.getAll({});
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createOrderDto: CreateOrderDto): Promise<OrderModel> {
    return this.ordersService.create(createOrderDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<OrderModel> {
    return this.ordersService.update({
      where: { id: +id },
      data: updateOrderDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<OrderModel> {
    return this.ordersService.delete({ id: +id });
  }
}
