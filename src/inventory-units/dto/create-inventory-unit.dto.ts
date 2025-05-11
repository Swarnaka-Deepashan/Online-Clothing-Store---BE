import { ObjectId } from 'mongoose';

export class CreateInventoryUnitDto {
  itemId: ObjectId;
  size: string;

  color: string;
  purchasePrice: number;

  sellingPrice: number;
  batchNumber: string;

  location: string;
}
