import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { UpdateOrderDto } from 'src/dto/update-order.dto';
import { IOrder } from 'src/interfaces/order';

@Injectable()
export class OrdersService {
  private orders: IOrder[] = []

  getAll() {
    return this.orders
  }

  getOne(id: number) {
    const foundOrder = this.orders.find(
      (order: IOrder) => order.id === id
    );
    return foundOrder
  }

  create(order: CreateOrderDto) {
    const id = Math.random() * 100;
    const newOrder = {
      id,
      inProcess: false,
      ...order,
    };
    this.orders.push(newOrder);
    return newOrder
  }

  update(id: number, order: UpdateOrderDto) {
    const updateOrder = this.getOne(id);
    if(!updateOrder) return

    const newOrder = Object.assign(updateOrder, order);
    const index = this.orders.indexOf(updateOrder);
    this.orders[index] = newOrder;

    return newOrder
  }

  delete(id: number) {
    const deleteOrder = this.getOne(id);
    if(!deleteOrder) return

    this.orders = this.orders.filter(
      (order: IOrder) => order.id !== id
    );
    return deleteOrder
  }
}