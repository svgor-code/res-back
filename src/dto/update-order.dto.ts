import { OrderStatusEnum } from '@prisma/client';

export class UpdateOrderDto {
  status: OrderStatusEnum;
  persons: number;
  createdAt: string | Date;
  updatedStatusAt: string | Date;
}
