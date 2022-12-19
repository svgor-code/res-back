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
import { CreateTableDto } from 'src/dto/create-table.dto';
import { UpdateTableDto } from 'src/dto/update-table.dto';
import { TableService } from 'src/services/table.service';
import { Table as TableModel } from '@prisma/client';

@Controller('table')
export class TableController {
  constructor(private tableService: TableService) {}

  @Get(':id')
  async get(@Param('id') id: number): Promise<TableModel> {
    return this.tableService.getOne({ id: Number(id) });
  }

  @Get()
  async findAll(): Promise<TableModel[]> {
    return this.tableService.getAll({});
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateTableDto): Promise<TableModel> {
    return this.tableService.create(createUserDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateUserDto: UpdateTableDto,
  ): Promise<TableModel> {
    return this.tableService.update({
      where: { id: Number(id) },
      data: updateUserDto,
    });
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<TableModel> {
    return this.tableService.delete({ id: Number(id) });
  }
}
