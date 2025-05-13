import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ _id: false })
export class ProductsInOrder {
  @Prop({ required: true })
  itemId: string;

  @Prop({ required: true })
  itemName: string;

  @Prop({ required: true })
  quantity: number;

  @Prop({ required: true })
  selectedSize: string;

  @Prop({ required: true })
  selectedColor: string;

  @Prop({ required: true })
  priceAtPurchase: number;
}

export const ProductsInOrderSchema =
  SchemaFactory.createForClass(ProductsInOrder);
