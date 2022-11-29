import { OrderStatusEnum } from '@prisma/client'

export class UpdateOrderDto {
  id: number;
  status: OrderStatusEnum;
  persons: number;
  createdAt: string | Date;
  updatedStatusAt: string | Date;
}
