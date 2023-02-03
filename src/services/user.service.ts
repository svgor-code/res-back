import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/services/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getAll(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }) {
    const { skip, take, cursor, where, orderBy } = params;

    return this.prisma.user.findMany({
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

  getOneByEmail(email: string) {
    return this.prisma.user.findFirst({
      where: {
        email: email,
      }
    })
  }

  create(user: Prisma.UserCreateInput) {
    return this.prisma.user.create({ data: user });
  }

  update(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }) {
    const { where, data } = params;

    return this.prisma.user.update({
      data,
      where,
    });
  }

  delete(where: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.delete({
      where,
    });
  }
}
