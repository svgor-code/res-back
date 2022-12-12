import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/services/prisma.service';

@Injectable()
export class DishService {
  constructor(private prisma: PrismaService) {}

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.DishWhereUniqueInput;
    where?: Prisma.DishWhereInput;
    orderBy?: Prisma.DishOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.dish.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getOne(dishWhereUniqueInput: Prisma.DishWhereUniqueInput) {
    return this.prisma.dish.findUnique({ where: dishWhereUniqueInput });
  }

  create(dish: Prisma.DishCreateInput) {
    return this.prisma.dish.create({ data: dish });
  }

  update(params: {
    where: Prisma.DishWhereUniqueInput;
    data: Prisma.DishUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.dish.update({
      data,
      where,
    });
  }

  delete(where: Prisma.DishWhereUniqueInput) {
    return this.prisma.dish.delete({
      where,
    });
  }
}
