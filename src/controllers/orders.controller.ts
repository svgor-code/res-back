import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
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
  async findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('cursor') cursor?: string,
    @Query('where') where?: string,
    @Query('orderBy') orderBy?: string,
  ): Promise<OrderModel[]> {
    return this.ordersService.getAll({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      cursor: cursor ? { id: Number(cursor) } : undefined,
      where: undefined,
      orderBy: orderBy ? JSON.parse(orderBy) : undefined,
    });
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
      where: { id: Number(id) },
      data: updateOrderDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<OrderModel> {
    return this.ordersService.delete({ id: Number(id) });
  }
}
