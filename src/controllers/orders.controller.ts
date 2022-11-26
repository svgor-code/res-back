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

@Controller('orders')
export class OrdersController {
  constructor(private ordersService: OrdersService) {}

  @Get(':id')
  async get(@Param('id') id: number): Promise<IOrder> {
    return this.ordersService.getOne(id);
  }

  @Get()
  async findAll(): Promise<IOrder[]> {
    return this.ordersService.getAll();
  }

  @Post()
  @HttpCode(204)
  async create(@Body() createOrderDto: CreateOrderDto): Promise<IOrder> {
    return this.ordersService.create(createOrderDto);
  }

  @Put(':id')
  @HttpCode(204)
  async update(
    @Param('id') id: number,
    @Body() updateOrderDto: UpdateOrderDto,
  ): Promise<IOrder> {
    return this.ordersService.update(id, updateOrderDto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: number): Promise<IOrder> {
    return this.ordersService.delete(id);
  }
}
