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
import { CreateTableBookingDto } from 'src/dto/create-tableBooking.dto';
import { UpdateTableBookingDto } from 'src/dto/update-tableBooking.dto';
import { TableBookingService } from 'src/services/tableBooking.service';
import { Prisma, TableBooking as TableBookingModel } from '@prisma/client';

@Controller('table-booking')
export class TableBookingController {
  constructor(private tableService: TableBookingService) {}

  @Get(':id')
  async get(@Param('id') id: string): Promise<TableBookingModel> {
    return this.tableService.getOne({ id: +id });
  }

  @Get()
  async findAll(): Promise<TableBookingModel[]> {
    return this.tableService.getAll({});
  }

  @Post()
  @HttpCode(201)
  async create(
    @Body() createUserDto: CreateTableBookingDto,
  ): Promise<TableBookingModel> {
    const table: Prisma.TableCreateNestedOneWithoutTableBookingInput = {};
    return this.tableService.create({ ...createUserDto, table });
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateTableBookingDto,
  ): Promise<TableBookingModel> {
    return this.tableService.update({
      where: { id: +id },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<TableBookingModel> {
    return this.tableService.delete({ id: +id });
  }
}
