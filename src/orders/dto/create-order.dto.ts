import { ObjectId } from 'mongoose';

export class productRequest {
  itemId: ObjectId;

  itemName: string;

  selectedSize: string;

  selectedColor: string;

  quantity: number;

  basePrice: number;
}

export class CreateOrderDto {
  userId: ObjectId;

  productRequests: productRequest[];

  shippingAddress: string;

  paymentMethod: string;

  paidAmount: string;
}
