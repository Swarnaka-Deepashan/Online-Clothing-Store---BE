import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { productAllocation } from './products-in-order.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId: User;

  @Prop({ type: [productAllocation], required: true })
  productAllocations: productAllocation[];

  @Prop({ required: true })
  totalAmount: number;

  @Prop({ required: true })
  orderStatus: string;

  @Prop({ required: true })
  paymentStatus: string;

  @Prop({ required: true })
  shippingAddress: string;

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
