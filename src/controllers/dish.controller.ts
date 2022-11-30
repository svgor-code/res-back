import { Get, Post, Put, Delete, Param, HttpCode } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DishService } from 'src/services/dish.service';

@Controller('dish')
export class DishController {
  constructor(private dishService: DishService) {}

  @Get(':id')
  @HttpCode(200)
  get(@Param('id') id: string): string {
    return `get ${id}`;
  }

  @Get()
  @HttpCode(200)
  findAll(): string {
    return 'findAll';
  }

  @Put()
  @HttpCode(200)
  update(): string {
    return 'update';
  }

  @Delete()
  @HttpCode(200)
  delete(): string {
    return 'delete';
  }

  @Post()
  @HttpCode(200)
  create(): string {
    return 'create';
  }
}
