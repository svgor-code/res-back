export interface ITableBooking {
  id: number;
  from: string;
  to: string;
  tableId: number;
  persons: number;
  cause: string;
  description: string;
}
