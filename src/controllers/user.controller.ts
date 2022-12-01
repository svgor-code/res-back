import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  HttpCode,
  Body,
} from '@nestjs/common';
import { CreateUserDto } from 'src/dto/сreate-user.dto';
import { UpdateUserDto } from 'src/dto/update-user.dto';
import { UserService } from 'src/services/user.service';
import { User as UserModel } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<UserModel> {
    return this.userService.getOne({ id: +id });
  }

  @Get()
  async findAll(): Promise<UserModel[]> {
    return this.userService.getAll({});
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
