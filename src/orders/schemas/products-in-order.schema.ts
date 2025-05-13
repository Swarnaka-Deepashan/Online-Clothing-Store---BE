import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { InventoryUnit } from 'src/inventory-units/schemas/inventory-unit.schema';
import { Item } from 'src/items/schemas/item.schema';

@Schema({ _id: false })
export class productsAllocation {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'InventoryUnit' })
  inventoryUnitIds: InventoryUnit[];

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Item' })
  itemId: Item;

  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  selectedSize: string;

  @Prop({ required: true })
  selectedColor: string;

  @Prop({ required: true })
  basePrice: number;
}

export const ProductsInOrderSchema =
  SchemaFactory.createForClass(productsAllocation);
