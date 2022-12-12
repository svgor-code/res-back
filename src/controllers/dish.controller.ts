import { Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { DishService } from 'src/services/dish.service';
import { Dish as DishModel, Prisma } from '@prisma/client';

@Controller('dish')
export class DishController {
  constructor(private readonly dishService: DishService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<DishModel> {
    return this.dishService.getOne({ id: Number(id) });
  }

  @Get()
  async findAll(): Promise<DishModel[]> {
    return this.dishService.getAll({});
  }

  @Post()
  async create(@Body() сreateDish: Prisma.DishCreateInput): Promise<DishModel> {
    return this.dishService.create(сreateDish);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateDish: Prisma.DishUpdateInput,
  ): Promise<DishModel> {
    return this.dishService.update({
      where: { id: Number(id) },
      data: updateDish,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<DishModel> {
    return this.dishService.delete({ id: Number(id) });
  }
}
