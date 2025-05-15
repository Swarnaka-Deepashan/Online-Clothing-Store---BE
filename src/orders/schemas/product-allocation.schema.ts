import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { InventoryUnit } from 'src/inventory-units/schemas/inventory-unit.schema';
import { Item } from 'src/items/schemas/item.schema';
import { variantDetailsSchema } from './variant-details.schema';

@Schema({ _id: false })
export class productAllocation {
  @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'InventoryUnit' })
  inventoryUnitIds: InventoryUnit[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  itemId: Item;

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
