import { Prop, Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { InventoryUnit } from 'src/inventory-units/schemas/inventory-unit.schema';

@Schema({ _id: false })
export class variantDetailsSchema {
  @Prop({ required: true })
  selectedSize: string;

  @Prop({ required: true })
  selectedColor: string;

  @Prop({ required: true })
  variantQuantity: number;

  @Prop({
    required: true,
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'InventoryUnit',
  })
  inventoryUnitIds: InventoryUnit[];
}
