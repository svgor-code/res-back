import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
  Body,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/сreate-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UserService } from 'src/services/user.service';
import { Prisma, User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getOne({ id: +id });
  }

  @Get()
  async findAll(
    @Query('skip') skip?: number,
    @Query('take') take?: number,
    @Query('cursor') cursor?: any,
    @Query('where') where?: any,
    @Query('orderBy') orderBy?: any,
  ): Promise<UserModel[]> {
    return this.userService.getAll({
      skip: skip ? Number(skip) : undefined,
      take: take ? Number(take) : undefined,
      cursor: cursor
        ? (JSON.parse(cursor) as Prisma.UserWhereUniqueInput)
        : undefined,
      where: where ? (JSON.parse(where) as Prisma.UserWhereInput) : undefined,
      orderBy: orderBy
        ? (JSON.parse(orderBy) as Prisma.UserOrderByWithRelationInput)
        : undefined,
    });
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto): Promise<UserModel> {
    return this.userService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<UserModel> {
    return this.userService.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<UserModel> {
    return this.userService.delete({ id: +id });
  }
}
