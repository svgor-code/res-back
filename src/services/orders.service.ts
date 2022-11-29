import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from 'src/dto/create-order.dto';
import { PrismaService } from 'src/services/prisma.service';
import { Prisma, OrderStatusEnum } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.OrderWhereUniqueInput;
    where?: Prisma.OrderWhereInput;
    orderBy?: Prisma.OrderOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.order.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getOne(orderWhereUniqueInput: Prisma.OrderWhereUniqueInput) {
    return this.prisma.order.findUnique({ where: orderWhereUniqueInput });
  }

  create(order: CreateOrderDto) {
    const newOrder = {
      ...order,
      status: OrderStatusEnum.NEW,
      createdAt: new Date(),
      updatedStatusAt: new Date(),
    };

    return this.prisma.order.create({ data: newOrder });
  }

  update(params: {
    where: Prisma.OrderWhereUniqueInput;
    data: Prisma.OrderUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.order.update({
      data,
      where,
    });
  }

  delete(where: Prisma.OrderWhereUniqueInput) {
    return this.prisma.order.delete({
      where,
    });
  }
}
