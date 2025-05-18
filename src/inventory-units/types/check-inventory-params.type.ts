import { Schema } from 'mongoose';

export interface CheckInventoryParams {
  itemId: Schema.Types.ObjectId; // or `string`, depending on your use
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
