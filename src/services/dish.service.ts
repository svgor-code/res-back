import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { CreateDishDto } from 'src/dto/create-dish.dto';
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

    return this.prisma.order.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  getOne(userWhereUniqueInput: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({ where: userWhereUniqueInput });
  }

  // create(dish1: CreateDishDto) {
  //   const dish
  //   return this.prisma.dish.create({ data: dish });
  // }

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
