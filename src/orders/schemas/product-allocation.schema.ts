import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';
import { variantDetailsSchema } from './variant-details.schema';

@Schema({ _id: false })
export class productAllocation {
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'InventoryUnit' })
  inventoryUnitIds: Types.ObjectId[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  itemId: Types.ObjectId;

  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  variantsDetails: variantDetailsSchema[];

  @Prop({ required: true })
  basePrice: number;

  @Prop({ required: true })
  quantity: number;
}

export const ProductsInOrderSchema =
  SchemaFactory.createForClass(productAllocation);
