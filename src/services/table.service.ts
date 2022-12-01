import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TableService {
  constructor(private prisma: PrismaService) {}

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.TableWhereUniqueInput;
    where?: Prisma.TableWhereInput;
    orderBy?: Prisma.TableOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.table.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getOne(tableWhereUniqueInput: Prisma.TableWhereUniqueInput) {
    return this.prisma.table.findUnique({ where: tableWhereUniqueInput });
  }

  create(order: Prisma.TableCreateInput) {
    return this.prisma.table.create({ data: order });
  }

  update(params: {
    where: Prisma.TableWhereUniqueInput;
    data: Prisma.TableUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.table.update({
      data,
      where,
    });
  }

  delete(where: Prisma.TableWhereUniqueInput) {
    return this.prisma.table.delete({
      where,
    });
  }
}
