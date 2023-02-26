import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TableBookingService {
  constructor(private prisma: PrismaService) {}

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TableBookingWhereUniqueInput;
    where?: Prisma.TableBookingWhereInput;
    orderBy?: Prisma.TableBookingOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.tableBooking.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getOne(tableBookingWhereUniqueInput: Prisma.TableBookingWhereUniqueInput) {
    return this.prisma.tableBooking.findUnique({
      where: tableBookingWhereUniqueInput,
    });
  }

  create(order: Prisma.TableBookingCreateInput) {
    return this.prisma.tableBooking.create({ data: order });
  }

  update(params: {
    where: Prisma.TableBookingWhereUniqueInput;
    data: Prisma.TableBookingUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.tableBooking.update({
      data,
      where,
    });
  }

  delete(where: Prisma.TableBookingWhereUniqueInput) {
    return this.prisma.tableBooking.delete({
      where,
    });
  }
}
