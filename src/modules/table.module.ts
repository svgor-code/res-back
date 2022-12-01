import { Module } from '@nestjs/common';
import { TableController } from 'src/controllers/table.controller';
import { TableService } from 'src/services/table.service';
import { PrismaModule } from './prisma.module';

@Module({
  controllers: [TableController],
  providers: [TableService],
  imports: [PrismaModule],
})
export class TableModule {}
