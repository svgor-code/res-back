import { Module } from '@nestjs/common';
import { TableBookingController } from 'src/controllers/tableBooking.controller';
import { TableBookingService } from 'src/services/tableBooking.service';
import { PrismaModule } from 'src/modules/prisma.module';

@Module({
  controllers: [TableBookingController],
  providers: [TableBookingService],
  imports: [PrismaModule],
})
export class TableBookingModule {}
