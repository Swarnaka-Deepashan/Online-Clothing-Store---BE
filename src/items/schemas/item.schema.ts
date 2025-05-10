import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type ItemDocument = HydratedDocument<Item>;

@Schema()
export class Item {
  @Prop({ required: true })
  name: string; // e.g., "Men's Slim Fit Jeans"

  // @Prop()
  // itemCode: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string; // e.g., "Men", "Women", "Unisex"

  @Prop({ required: true })
  subCategory: string; // e.g., "T-Shirts", "Dresses", "Jackets"

  @Prop({ required: true })
  brand: string;

  @Prop({ required: true })
  sizeOptions: string[];

  @Prop({ required: true })
  colorOptions: string[];

  @Prop({ required: true })
  material: string;

  @Prop({ required: true })
  basePrice: number;

  @Prop()
  discountPrice: string;

  // @Prop()
  // currency: string;

  @Prop({ required: true })
  stock: number; // Available quantity

  @Prop({ required: true })
  isAvailable: boolean;

  @Prop()
  images: string[];

  @Prop()
  createdAt: Date;

  @Prop({ required: true })
  updatedAt: Date;

  // @Prop({ required: true })
  // genderTarget: string;

  // @Prop({ required: true })
  // ratings: number;

  @Prop()
  tags: string[];

  // @Prop({ required: true })
  // sku: string; //Stock Keeping Unit WTS-BLK-M-001

  @Prop()
  deliveryInfo: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
