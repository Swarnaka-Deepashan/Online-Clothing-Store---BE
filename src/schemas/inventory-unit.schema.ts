import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ClothingSize } from 'src/enums/clothing-size.enum';
import { InventoryUnitStatus } from 'src/enums/inventory-unit-status.enum';

export type InventoryUnitDocument = HydratedDocument<InventoryUnit>;

@Schema()
export class InventoryUnit {
  @Prop({ type: { type: mongoose.Schema.Types.ObjectId, ref: 'Item' } })
  itemId: mongoose.Types.ObjectId;

  @Prop({ required: true, enum: ClothingSize })
  size: ClothingSize;

  @Prop({ required: true })
  color: string;

  @Prop({ required: true })
  purchasePrice: number;

  @Prop({ required: true })
  sellingPrice: number;

  // @Prop({ required: true, unique: true })
  // sku: string; // Stock Keeping Unit, e.g., WTS-BLK-M-001

  @Prop({
    enum: InventoryUnitStatus,
    default: InventoryUnitStatus.IN_STOCK,
  })
  status: InventoryUnitStatus;

  @Prop()
  batchNumber: string;

  @Prop({ required: true, default: 'Home' })
  location: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const InventoryUnitSchema = SchemaFactory.createForClass(InventoryUnit);
