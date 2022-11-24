import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateOrderDto } from '../dto/create-order.dto';
import { UpdateOrderDto } from '../dto/update-order.dto';
import { IOrder } from '../interfaces/order';
import { OrdersService } from '../services/orders.service';

@Controller('orders')
export class OrdersController {

  constructor(
    private ordersService: OrdersService
  ) {}

  @Get(':id')
  get(@Param('id') id: number): Observable<IOrder> {
    return of(this.ordersService.getOne(id))
  }

  @Get()
  findAll(): Observable<IOrder[]> {
    return of(this.ordersService.getAll())
  }

  @Post()
  @HttpCode(204)
  create(@Body() createOrderDto: CreateOrderDto): Observable<IOrder> {
    return of(this.ordersService.create(createOrderDto))
  }

  @Put(':id')
  @HttpCode(204)
  update(@Param('id') id: number, @Body() updateOrderDto: UpdateOrderDto): Observable<IOrder> {
    return of(this.ordersService.update(id, updateOrderDto))
  }

  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: number): Observable<IOrder> {
    return of(this.ordersService.delete(id))
  }
}