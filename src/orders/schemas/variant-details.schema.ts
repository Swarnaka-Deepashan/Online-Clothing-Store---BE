import { Prop, Schema } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

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
  inventoryUnitIds: Types.ObjectId[];
}
