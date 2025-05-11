import { ObjectId } from 'mongoose';

export class CreateInventoryUnitBatchDto {
  itemId: ObjectId;
  size: string;

  color: string;
  purchasePrice: number;

  sellingPrice: number;
  batchNumber: string;

  quantity: number;
  location: string;
}
